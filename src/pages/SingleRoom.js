import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyleHero from "../components/StyledHero";
export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        };
    }

    static contextType = RoomContext;

    //componentDidMount(){
        //console.log(this.props)
    //}

    render(){
        const { getRoom} = this.context;
        const room = getRoom(this.state.slug);

        if(!room){
            return(
                <div className="error">
                    <h3>O quarto não foi encontrado...</h3>
                    <Link to="/rooms" className="btn-primary">
                        De volta aos quartos
                    </Link>
                </div>
            );
        }

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [main,...defaultImages] = images;
        console.log(defaultImages);

        return(
            <>
                <StyleHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            De volta pro quarto
                        </Link>
                    </Banner>
                </StyleHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImages.map((item, index) =>(
                            <img key={index} src={item} alt={name} />
                        ))}
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Detalhes</h3>
                            <p>{description}</p>
                        </article>

                        <article>
                            <h3>Detalhes</h3>
                            <p>{description}</p>
                        </article>

                        <article className="info">
                            <h3>Informações</h3>
                            <h3>Preço: ${price}</h3>
                            <h6>Tamanho: {size}SQRFT</h6>
                            <h6>
                                Capacidade :
                                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>

                        <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extra">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}
