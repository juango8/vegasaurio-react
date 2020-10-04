import React from "react";

export const Home = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade animated fadeIn fast"
                 data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={'./assets/img/first.png'} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={'./assets/img/second.png'} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={'./assets/img/third.png'} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container-fluid main-container">
                <div className="row test">
                    <div className="col-12 col-lg-3">
                        <img src={'./assets/img/categoria1.png'}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={'./assets/img/categoria2.png'}/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <img src={'./assets/img/categoria3.png'}/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <img src={'./assets/img/categoria4.png'}/>
                        <img src={'./assets/img/categoria5.png'}/>
                    </div>
                    <div className="col-12 col-lg-6" id="principal">
                        <img src={'./assets/img/categoria6.png'}/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <img src={'./assets/img/categoria7.png'}/>
                        <img src={'./assets/img/categoria8.png'}/>
                    </div>

                    <div className="col-12 col-lg-3">
                        <img src={'./assets/img/categoria9.png'}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={'./assets/img/categoria10.png'}/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <img src={'./assets/img/categoria11.png'}/>
                    </div>
                </div>
            </div>

        </>
    )
}
