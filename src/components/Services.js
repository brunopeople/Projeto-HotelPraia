import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVa, FaBeer} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component{
    state = {
        services: [
            {
            icon: <FaCocktail />,
            title: "Coqueteis Grátis",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },

            {
            icon: <FaHiking />,
            title: "Escalagem sem Fim!",
            info:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },

            {
                icon: <FaShuttleVa />,
                title: "Cobertura Grátis",
                info:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },

            {
                icon: <FaBeer />,
                title: "A Cerveja Mais Forte",
                info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            }
        ]
    };

    render(){
        return(
            <section className="services">
                <Title title="services" />
                    <div className="services-center">
                        {this.state.services.map(item => {
                            return(
                                <article key={`item-${item.title}`} className="services">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })}
                    </div>
            </section>
        );
    }
}
