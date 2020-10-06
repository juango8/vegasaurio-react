
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
            <div className="container">
                
            </div>
        </div>
    );
}
