import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

const Error = () =>{
    return(
    <Hero>
        <Banner title="404" subtitle="pagina não encontrada">
            <Link to="/" className="btn-primary">
                Retorna para o Home
            </Link>
        </Banner>
    </Hero>
    );
};

export default Error;