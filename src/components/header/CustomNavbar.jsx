import React, {Component} from 'react';
import './CustomNavbar.scss'
import {Navbar, Nav, NavItem, Image, Button, Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><Image src="assets/bellotero-logo.svg"></Image></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/" to="/" className="nav-links">Features</NavItem>
                        <NavItem eventKey={2} href="/" to="/" className="nav-links">Solutions</NavItem>
                        <NavItem eventKey={3} href="/" to="/" className="nav-links">Stories</NavItem>
                        <NavItem eventKey={4} href="/" to="/" className="nav-links">Partners</NavItem>
                        <NavItem eventKey={5} href="/" to="/" className="nav-links">About</NavItem>
                        <NavItem eventKey={6} href="/" to="/" className="nav-links">Blog</NavItem>
                        <Button bsStyle="Basic" className="">Request a demo</Button>
                        <Button className="login-button" >Log In</Button>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}