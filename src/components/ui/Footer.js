import React from "react";

export const Footer = () => {
    return (
        <footer id="footer" className="d-flex-column text-center">
            <hr className="mt-0"/>
            <div className="text-center">
                <h4></h4>
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <a href="#!" className="sbtn btn-large mx-1 facebook" title="Facebook">
                            <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!" className="sbtn btn-large mx-1 twitter" title="Twitter">
                            <i className="fab fa-twitter-square fa-2x"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!" className="sbtn btn-large mx-1 youtube" title="Youtube">
                            <i className="fab fa-youtube-square fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="mb-0"/>
        </footer>
    );
}
