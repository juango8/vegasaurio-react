import React from "react";
import {Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav id="nav" className="navbar navbar-expand-sm navbar-dark fixed-top">
            <Link
                to="/">
                <a className="navbar-brand" href="/">
                    <img src={'./assets/img/vega.png'} height="130" alt="" loading="lazy"/>
                </a>
            </Link>
            {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
            {/*        data-target="#navbarSupportedContent"*/}
            {/*        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*    <span className="navbar-toggler-icon"/>*/}
            {/*</button>*/}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/">
                        INICIO
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/quienes-somos">
                        QUIENES SOMOS
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/ubicanos">
                        UBICANOS
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/productos">
                        PRODUCTOS
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/productos">
                        OFERTAS
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/carta">
                        CARTA
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/blog">
                        BLOG
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/eventos">
                        EVENTOS
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
