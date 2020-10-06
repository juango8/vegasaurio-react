
import React from 'react';


export const ProductsHome = () => {
    return (
        <div>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide animated fadeIn fast"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={'./assets/img/banner.png'}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <div id="sidebar-wrapper">
                        <ul class="sidebar-nav">
                            <h1>CATEGORÍAS</h1>
                            <li><a href="#">FRUTAS Y VERDURAS</a></li>
                            <li><a href="#">DISPENSA</a></li>
                            <li><a href="#">CUIDADO PERSONAL</a></li>
                            <li><a href="#">LIMPIEZA</a></li>
                            <li><a href="#">PANADERIA</a></li>
                            <li><a href="#">CORTES Y CARNES VEGETALES</a></li>
                            <li><a href="#">EMBUTIDOS</a></li>
                            <li><a href="#">LICORES</a></li>
                            <li><a href="#">LÁCTEOS Y QUESOS</a></li>
                            <li><a href="#">FLORES Y DETALLES</a></li>
                            <li><a href="#">ALIMENTOS PREPARADOS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
