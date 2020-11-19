import React, { Component } from "react";
import items from "./data";
import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component{
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        laoding: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        breakfast: false,
        pets: false
    };
   /*  getData = async () =>{
        try {
            let response = await Client.getEntries({
                content_type: "beachResortRoom"
            });
            let featuredRooms = rooms.fiter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));
            this.setState({
                rooms,
                featureadRooms,
                sortedRooms,
                loading: false,
                //
                price: maxPrice,
                maxPrice,
                maxSize
            });
        } */

        componentDidMount(){
            // this.getData();
            let rooms = this.formatData(items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            //

            let maxPrice = Math.max(...rooms.map(item => item.price));
            let maxSize = Math.max(...rooms.map(item => item.size));
            this.setState({
                rooms,
                featuredRooms,
                loading: false,

                price: maxPrice,
                maxPrice,
                maxSize
            });
        }


        formatData(items) {
            let tempItems = items.map(item => {
                let id = item.sys.id;
                let images = item.fields.images.map(image => image.fields.file.url);

                let room = {...item.fields, images, id};
                return room;
                });
                return tempItems;
             }
             getRoom = slug => {
                let tempRooms = [...this.state.rooms];
                const room = tempRooms.find(room => room.slug === slug);
                return room;
            };
    
            handleChange = event =>{
                const target = event.target;
                const value = target.type === "checkbox" ? target.checked : target.value;
                const name = target.name;
                console.log(name, value);
    
                this.setState(
                    {
                        [name]: value
                    },
                    this.filterRooms
                );
            };
    
            filterRooms = () => {
                let{
                    rooms,
                    type,
                    capacity,
                    price,
                    minSize,
                    maxSize,
                    breakfast,
                    pets,
                } = this.state;
    
                let tempRooms = [...rooms];
    
                //transformar os valores 
                // pega os capacity
                capacity = parseInt(capacity);
                price = parseInt(price);
    
                //filtrado pelo tipo, filtrar os quartos pelo tipo
                if(type !== "all"){
                    tempRooms = tempRooms.filter(room => room.type === type);
                }
    
                //filtrar pelo capacity, irá filtrar os Quartos com maior capacidade 
                if(capacity !== 1){
                    tempRooms = tempRooms.filter(room => room.capacity >= capacity);
                }
    
                // filtrar os quartos pelo preço 
                tempRooms = tempRooms.filter(room => room.price <= price);
    
                //filtrar pelo quartos pelo tamanho
                tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize);
    
                //filtrar os cafés da manhã
    
                if(breakfast){
                    tempRooms = tempRooms.filter(room => room.breakfast === true);
                }
    
                //filtrar quartos que oferecem vaga para pets
    
                if(pets){
                    tempRooms = tempRooms.filter(room => room.pets === true);
                }
    
                this.setState({
                    sortedRooms: tempRooms
                });
            };
    
            render() {
                return (
                  <RoomContext.Provider
                    value={{
                      ...this.state,
                      getRoom: this.getRoom,
                      handleChange: this.handleChange
                    }}
                  >
                    {this.props.children}
                  </RoomContext.Provider>
                );
              }
            }
    
            const RoomConsumer = RoomContext.Consumer;
    
            export {RoomProvider, RoomConsumer, RoomContext};
    
            export function withRoomConsumer(Component){
                return function ConsumerWrapper(props){
                    return(
                        <RoomConsumer>
                            {value => <Component {...props} context={value} />}
                        </RoomConsumer>
                    );
                };
        }

    