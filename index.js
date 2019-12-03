import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';
import Contact from './components/links/Contact';
import Home from './components/links/Home';
import About from './components/links/About';
import Products from './components/links/Products';

const App = () => {
    return (
        <div className="d-flex flex-column">
            <BrowserRouter>
                <Navbar expand="lg" className="navbar-top">
                    <Navbar.Brand as={Link} to="/">Radim Jurečka</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Domů</Nav.Link>
                            <Nav.Link as={Link} to="/about">O nás</Nav.Link>
                            <Nav.Link as={Link} to="/products">Naše produkty</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        </div >
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);