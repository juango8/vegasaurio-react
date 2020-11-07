import React from "react";
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav id="nav" className="navbar navbar-expand-sm navbar-dark fixed-top">
            <Link
                to="/">
                <a className="navbar-brand" href="/">
                    <img src={'./assets/img/vega.png'} height="130" alt="" loading="lazy" />
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
                        QUIÉNES SOMOS
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/ubicanos">
                        UBÍCANOS
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
                        to="/ofertas">
                        OFERTAS
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/carta">
                        RESTOBAR
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link menu-item"
                        exact
                        to="/blog">
                        BLOG
                    </NavLink>

                </div>

                <div class="input-group" style={{ margin: "0em 4em" }}>
                    <div class="input-group-prepend">
                        <span class="input-group-text black" style={{ backgroundColor: "black", borderColor:"black" }} id="basic-text1"><i class="fas fa-search text-white"
                            aria-hidden="true"></i></span>
                    </div>
                    <input class="form-control my-0 py-1" type="text" placeholder="Buscar producto..." aria-label="Search" />
                </div>
            </div>
        </nav>
    );
}
