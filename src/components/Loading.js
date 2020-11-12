import React from "react";
import loadingGif from "../images/gif/loading-arrow-gif";
const Loading = () => {
    return(
        <div className="laoding">
            <h4>Dados dos Quartos Carregando...</h4>
            <img src={loadingGif} alt="" />
        </div>
    );
};

export default Loading;