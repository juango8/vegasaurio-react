import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import {Navbar} from "../ui/Navbar";

import {AboutUs} from "../pages/AboutUs";
import {Home} from "../pages/Home";
import {FindUs} from "../pages/FindUs";
// import {ProductsHome} from "../pages/products/ProductsHome";

export const NavbarRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/quienes-somos" component={AboutUs}/>
                    <Route exact path="/ubicanos" component={FindUs}/>
                    <Route exact path="/carta" component={AboutUs}/>
                    <Route exact path="/blog" component={AboutUs}/>
                    <Route exact path="/eventos" component={Home}/>
                </Switch>
            </div>

        </>
    )
}
