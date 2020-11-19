import React, {Component} from "react";
import {Link} from "react-router-dom";
import { FalllightRight } from "react-icons/fa";
import logo from "../images/logo.svg";

export default class Navbar extends Component{
    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render(){
        return(
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Hotel Praia" />
                        </Link>
                        <button 
                        type="button"
                        className="nav-btn"
                        onClick={this.handleToggle}
                        >
                            <FalllightRight className="nav-icon" />
                        </button>
                    </div>

                    <ul
                        className={this.state.isOpen ? "nav-links show-nav": "nav-links"}
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Quartos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}