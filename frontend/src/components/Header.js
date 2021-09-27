import React, { Component } from 'react';
import { Navbar, Container, NavItem, Nav, NavDropdown, Row } from 'react-bootstrap'
import { BiListUl } from 'react-icons/bi'
import { NavLink, Link } from 'react-router-dom'

const Header = (props) => {
    return (
        // <nav id="nav" style={{position: 'absolute', zIndex: 1000}}>
        //     <Row>
        //        <div className="navbar-items">
        //             <div className="navbar-item">
        //                 <img width="64" height="64" className="logo"/>
        //             </div>
        //             <div className="navbar-item">
        //                 <NavLink exact to="/" activeClassName="current">
        //                     <p>Home</p>
        //                 </NavLink>
        //             </div>
        //             <div className="navbar-item">
        //                 <NavLink to="/marc" activeClassName="current">
        //                     <p>Technologies</p>
        //                 </NavLink>
        //             </div>
        //         </div>
        //     </Row>

            
        // </nav>
        <nav>
        <header id="header" class="d-flex flex-column justify-content-center">

        <nav id="navbar" class="navbar nav-menu">
            <ul>
                <li>
                    <NavLink exact to="/" className="nav-link" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/marc" className="nav-link" activeClassName="active">
                        Technologies
                    </NavLink>
                </li>
                <li>
                    <img class="logo"/>
                </li>
            </ul>
        </nav>

        </header>
        </nav>
    )
} 

export default Header;