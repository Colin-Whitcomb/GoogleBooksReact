import React from 'react';

function Navbar() {

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <h1>Hello?</h1>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar


