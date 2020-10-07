import React from "react";
import {useParams} from 'react-router-dom';

export const PostScreen = () => {
    const {postId} = useParams();
    console.log(postId);

    return (
        <div>
            <div>
                <img
                    src={'/assets/img/banner.png'}
                    className="d-block w-100"
                    alt="..."/>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-8 blog-main-column cleandefaultpadding">
                        <img src={'/assets/img/banner.png'} alt="..."/>
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col-12 cleandefaultpadding"><h2>Post {postId}</h2></div>
                            </div>
                            <div className="row">
                                <div className="container">
                                    <div className="row cleandefaultpadding">
                                        <div className="col-3 cleandefaultpadding flex-column">
                                            <div className="">
                                                <h6><strong>Por:</strong><br/> EderBerpl</h6>
                                            </div>
                                            <div className="">
                                                <h6><strong>Publicado:</strong><br/> 08/10/2020</h6>
                                            </div>
                                        </div>
                                        <div className="col-9 cleandefaultpadding">
                                            <p align="justify">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam fugit
                                                nemo perspiciatis provident quas quia repellat. Cumque, deleniti eaque
                                                eum, excepturi hic magni, necessitatibus odio possimus provident quasi
                                                quidem similique?Accusamus, eligendi ipsa rerum sint sunt voluptatibus?
                                                Alias blanditiis consequatur doloremque dolores ducimus, est et fugiat
                                                illum impedit magni minus molestias nesciunt nihil quam quis repellendus
                                                sed similique sunt ullam!Assumenda commodi dicta harum ipsum numquam
                                                obcaecati odit quae quia, sunt voluptatum. Distinctio et facere incidunt
                                                ipsa maiores suscipit unde. Asperiores consectetur facilis iste iure
                                                magnam quo, temporibus totam voluptatibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-coments">
                                <div className="row mt-4">
                                    <div className="col-12 cleandefaultpadding"><h2>Comentarios</h2></div>
                                </div>
                                <div className="row ">
                                    <div className="container">
                                        <div className="row blog-comment mt-2 cleandefaultpadding">
                                            <div className="col-3 cleandefaultpadding flex-column">
                                                <div className="">
                                                    <h6><strong>Por:</strong><br/> EderBerpl</h6>
                                                </div>
                                                <div className="">
                                                    <h6><strong>Publicado:</strong><br/> 08/10/2020</h6>
                                                </div>
                                            </div>
                                            <div className="col-9 cleandefaultpadding">
                                                <p align="justify">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                                    aliquid animi culpa cumque delectus, impedit iste labore laborum,
                                                    minus mollitia non nostrum obcaecati odio quia repellendus
                                                    reprehenderit saepe ullam voluptatum.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row blog-comment mt-2 cleandefaultpadding">
                                            <div className="col-3 cleandefaultpadding flex-column">
                                                <div className="">
                                                    <h6><strong>Por:</strong><br/> EderBerpl</h6>
                                                </div>
                                                <div className="">
                                                    <h6><strong>Publicado:</strong><br/> 08/10/2020</h6>
                                                </div>
                                            </div>
                                            <div className="col-9 cleandefaultpadding">
                                                <p align="justify">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                                    aliquid animi culpa cumque delectus, impedit iste labore laborum,
                                                    minus mollitia non nostrum obcaecati odio quia repellendus
                                                    reprehenderit saepe ullam voluptatum.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row blog-comment mt-2 cleandefaultpadding">
                                            <div className="col-3 cleandefaultpadding flex-column">
                                                <div className="">
                                                    <h6><strong>Por:</strong><br/> EderBerpl</h6>
                                                </div>
                                                <div className="">
                                                    <h6><strong>Publicado:</strong><br/> 08/10/2020</h6>
                                                </div>
                                            </div>
                                            <div className="col-9 cleandefaultpadding">
                                                <p align="justify">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                                    aliquid animi culpa cumque delectus, impedit iste labore laborum,
                                                    minus mollitia non nostrum obcaecati odio quia repellendus
                                                    reprehenderit saepe ullam voluptatum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
