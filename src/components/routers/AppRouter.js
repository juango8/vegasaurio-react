import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {NavbarRoutes} from "./NavbarRoutes";
import {ProductsHome} from "../pages/products/ProductsHome";
import {Footer} from "../ui/Footer";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/productos" component={ProductsHome}/>
                    <Route path="/" component={NavbarRoutes}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}
