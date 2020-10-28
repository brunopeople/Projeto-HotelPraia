import React from "react";
import Room from "./Room";
const RoomList = ({rooms}) =>{
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>Infelizmente não há vagas para a pesquisa que você fez!</h3>
            </div>
        );
    }

    return(
        <section className="roomlist">
            <div className="roomslist-center">
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />;
                })}
            </div>
        </section>
    );
};

export default RoomList;