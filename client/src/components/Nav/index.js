import React from "react";

const styles = {
    navBar: {
        backgroundColor: "blue"
    }
}

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Book Search React</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/">Search Books</a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved">My Library</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 export default Nav;