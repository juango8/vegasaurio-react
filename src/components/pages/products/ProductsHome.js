
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
                <div className="col-lg-9 col-12">
                    <div className="tags">
                        <div class="select-box">
                            <div class="select-box__current" tabindex="1">
                                <div class="select-box__value">
                                    <input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked" />
                                    <p class="select-box__input-text">Cream</p>
                                </div>
                                <div class="select-box__value">
                                    <input class="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked" />
                                    <p class="select-box__input-text">Cheese</p>
                                </div>
                                <div class="select-box__value">
                                    <input class="select-box__input" type="radio" id="2" value="3" name="Ben" checked="checked" />
                                    <p class="select-box__input-text">Milk</p>
                                </div>
                                <div class="select-box__value">
                                    <input class="select-box__input" type="radio" id="3" value="4" name="Ben" checked="checked" />
                                    <p class="select-box__input-text">Honey</p>
                                </div>
                                <div class="select-box__value">
                                    <input class="select-box__input" type="radio" id="4" value="5" name="Ben" checked="checked" />
                                    <p class="select-box__input-text">Toast</p>
                                </div><img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                            </div>
                            <ul class="select-box__list">
                                <li>
                                    <label class="select-box__option" for="0" aria-hidden="aria-hidden">Cream</label>
                                </li>
                                <li>
                                    <label class="select-box__option" for="1" aria-hidden="aria-hidden">Cheese</label>
                                </li>
                                <li>
                                    <label class="select-box__option" for="2" aria-hidden="aria-hidden">Milk</label>
                                </li>
                                <li>
                                    <label class="select-box__option" for="3" aria-hidden="aria-hidden">Honey</label>
                                </li>
                                <li>
                                    <label class="select-box__option" for="4" aria-hidden="aria-hidden">Toast</label>
                                </li>
                            </ul>
                        </div>
                        <input type="checkbox" id="cb1" /><label className="labeltag" for="cb1">glutten free</label>
                        <input type="checkbox" id="cb1" /><label className="labeltag" for="cb1">organico</label>
                        <input type="checkbox" id="cb1" /><label className="labeltag" for="cb1">ecologico</label>
                        <input type="checkbox" id="cb1" /><label className="labeltag" for="cb1">apto para diabeticos</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
