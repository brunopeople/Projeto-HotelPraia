import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
    return (
        <>
            <Hero hero="roomHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">
                        Retornando ao Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    );
};

export default Rooms;