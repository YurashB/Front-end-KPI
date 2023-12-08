import React from 'react';

const NavBar = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid d-flex justify-content-around">
                        <a className="navbar-brand" href="#">
                            <img src="https://cdn.worldvectorlogo.com/logos/powerail-1.svg"
                                 alt="logo"
                                 width="75" height="20"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacts</a>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-end">
                                <a href="#" className="p-1">
                                    <i className="bi bi-facebook cian"></i>
                                </a>
                                <a href="#" className="p-1">
                                    <i className="bi bi-whatsapp cian"></i>
                                </a>
                                <a href="#" className="p-1">
                                    <i className="bi bi-instagram cian"></i>
                                </a>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default NavBar;
