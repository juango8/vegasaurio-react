import React from "react";

export const Footer = () => {
    return (
        <footer id="footer" className="d-flex-column text-center">
            <hr className="mt-0"/>
            <div className="text-center">
                <h4></h4>
                <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                        <a href="#!" class="sbtn btn-large mx-1 facebook" title="Facebook">
                        <i class="fab fa-facebook-square fa-2x"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!" class="sbtn btn-large mx-1 linkedin" title="Linkedin">
                        <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!" class="sbtn btn-large mx-1 twitter" title="Twitter">
                        <i class="fab fa-twitter-square fa-2x"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!" class="sbtn btn-large mx-1 youtube" title="Youtube">
                        <i class="fab fa-youtube-square fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="mb-0"/>
            <div class="container text-left text-md-center">
                <div class="row">
                    <div class="col-md-3 mx-auto shfooter">
                        <h5 class="my-2 font-weight-bold d-none d-md-block">VEGASAURIO</h5>
                        <div class="d-md-none title" data-target="#Product" data-toggle="collapse">
                            <div class="mt-3 font-weight-bold">VEGASAURIO
                                <div class="float-right navbar-toggler">
                                    <i class="fas fa-angle-down"></i>
                                    <i class="fas fa-angle-up"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="list-unstyled collapse" id="Product">
                            <li>descripción</li>
                        </ul>
                    </div>
                <hr class="clearfix w-100 d-md-none mb-0"></hr>
                <div class="col-md-3 mx-auto shfooter">
                    <h5 class="my-2 font-weight-bold d-none d-md-block">
                        INFORMACIÓN </h5>
                    <div class="d-md-none title" data-target="#Company" data-toggle="collapse">
                        <div class="mt-3 font-weight-bold">INFORMACIÓN

                            <div class="float-right navbar-toggler">
                                <i class="fas fa-angle-down"></i>
                                <i class="fas fa-angle-up"></i>
                            </div>
                        </div>
                    </div>
                    <ul class="list-unstyled collapse" id="Company">
                        <li><i class="fas fa-phone-alt"></i> 123123132</li>
                        <li><i class="fas fa-envelope"></i> email@example.com</li>
                        <li><i class="fas fa-home"></i> dirección</li>
                    </ul>
                </div>
                <hr class="clearfix w-100 d-md-none mb-0"/>
                <div class="col-md-3 mx-auto shfooter">
                    <h5 class="my-2 font-weight-bold d-none d-md-block"></h5>
                    <img src="assets/img/vega.png" width="180" alt="" loading="lazy"/>
                    <ul class="list-unstyled collapse" id="Resources">
                        <li></li>
                    </ul>
                </div>
                <hr class="clearfix w-100 d-md-none mb-0"></hr>
            </div>
        </div>
        <hr class="mb-0"/>
        <div class="py-3 text-center">
        Copyright &copy; Vegasaurio
        </div>
        </footer>
    );
}
