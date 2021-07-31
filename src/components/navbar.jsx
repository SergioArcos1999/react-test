import React from 'react';

/* Stateless Functional Component */
/* Props will be passed as parameter within runtime */
const NavBar = ({ totalCounters }) => {
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Shopping Cart{" "}
                    <span className={"badge badge-pill badge-secondary m-2"}>{ totalCounters }</span>
                </a>

            </div>
        </nav>
    );
};

export default NavBar;