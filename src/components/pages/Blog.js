import React from "react";
import { Link } from 'react-router-dom';

export const Blog = () => {
    return (
        <div>
            <div>
                <img
                    src={'./assets/img/banner.png'}
                    className="d-block w-100"
                    alt="..."/>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-8 blog-main-column">
                        <img src={'./assets/img/banner.png'} alt="..."/>
                        <div className="blog-post mt-4">
                            <h2>Post 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto magni nam
                                quidem recusandae rerum similique tempora voluptatem. Accusantium asperiores aut
                                deserunt iste libero mollitia natus nostrum odio officia soluta.</p>
                            <div className="row">
                                <div className="col-4">
                                    <h6>Por: EderBerpl</h6>
                                </div>
                                <div className="col-4">
                                    <h6>Publicado: 08/10/2020</h6>
                                </div>
                                <div className="col-4 d-flex flex-row-reverse button-right">
                                    <Link to={`./blog/${1}`}>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-primary">
                                            comentarios
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="blog-post mt-4">
                            <h2>Post 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto magni nam
                                quidem recusandae rerum similique tempora voluptatem. Accusantium asperiores aut
                                deserunt iste libero mollitia natus nostrum odio officia soluta.</p>
                            <div className="row">
                                <div className="col-4">
                                    <h6>Por: Adriguu</h6>
                                </div>
                                <div className="col-4">
                                    <h6>Publicado: 08/10/2020</h6>
                                </div>
                                <div className="col-4 d-flex flex-row-reverse button-right">
                                    <Link to={`./blog/${2}`}>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-primary">
                                            comentarios
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 blog-informative-column">
                        <div className="row flex-column">
                            <h4>Archivos</h4>
                            <ul>
                                <li>2019</li>
                                <li>2020
                                    <ul>
                                        <li>Marzo</li>
                                        <li>Abril</li>
                                        <li>Mayo</li>
                                        <li>Junio</li>
                                        <li>Julio</li>
                                        <li>Agosto</li>
                                        <li>Septiembre</li>
                                        <li>Octubre</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="row flex-column">
                            <h4>Enlaces de Interes</h4>
                            <ul>
                                <li>categoria 1</li>
                                <li>categoria 2</li>
                                <li>categoria 3</li>
                                <li>categoria 4</li>
                                <li>categoria 5</li>
                                <li>categoria 6</li>
                            </ul>
                        </div>
                        <div className="row flex-column">
                            <h4>Otros</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
