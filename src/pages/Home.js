import {Link} from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeatureadRooms";
import FeatureadRooms from "../components/FeatureadRooms";
const home = () => {
    return(
        <>
            <Hero>
                <Banner
                    title="Quartos Luxuosos"
                    subtitle=" Quartos de Luxo com Reserva de até R$ 2999"
                    >
                        <Link to="/rooms" className="btn-primary">
                            Nossos Quartos
                        </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeatureadRooms />
        </>
    );
};

export default home;