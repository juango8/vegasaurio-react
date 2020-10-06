import React from "react";

export const FindUs = () => {
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
                            src={'./assets/img/quienes-somos.png'}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="justify-content-center map-responsive">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.4710516587591!2d-71.54404491710903!3d-16.385755491724854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424bcbab92c74f%3A0x59fb7ba50a68bcb0!2sVegasaurio!5e0!3m2!1ses!2spe!4v1590536038426!5m2!1ses!2spe"
                            width="1300"
                            height="600"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                    <div className="col-lg-6 col-12 logos-column">
                        <div>
                            <img className="vega" src={'./assets/img/vega.png'} alt=""/>
                            <div className="alinear">
                                <h2>Minimarket del Vegasaurio</h2>
                                <p>Lunes a Domingo 06am a 9pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 logos-column">
                        {/* <div>
                            <img className="lounge" src={'./assets/img/lounge.png'} alt=""/>
                            <div className="alinear">
                                <h2>Lounge Del Brujo</h2>
                                <p>Lunes a Domingo 12pm a 9pm</p>
                            </div>
                        </div> */}
                        <div>
                            <img className="lounge" src={'./assets/img/lounge.png'} alt=""/>
                            <div className="alinear">
                                <h2>Minimarket del Vegasaurio</h2>
                                <p>Lunes a Domingo 06am a 9pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-12 logos-column">
                        <h2>Ubícanos</h2>
                        <p>Urbanizacion Tronco de Oro L-1, Cayma</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
