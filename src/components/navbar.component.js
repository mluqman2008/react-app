import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

const NavbarTop = () => {
    let location = useLocation();
    useEffect(() => {
        //console.log(location.pathname);
      }, [location]);
    return (
		<header className="App-header">
			<Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
				<Container>
					{/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
					<Navbar.Brand>
						<Link exact="true" to={'/home'} className="nav-link">
							<Image src="http://picsum.photos/150/50" fluid rounded className="App-logo" alt="logo" />
						</Link>
					</Navbar.Brand>
					
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{/*<Nav.Link href="#home">Home</Nav.Link> */}
							<Link exact="true" to={'/home'} className={`nav-link ${location.pathname==="/home"? "active": ""}`}>Home</Link>
							<Link exact="true" to={'/about'} className={`nav-link ${location.pathname==="/about"? "active": ""}`}>About</Link>
							<Link exact="true" to={'/create-user'} className={`nav-link ${location.pathname==="/create-user"? "active": ""}`}>Create User</Link>
							
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</Container>
			</Navbar>
		</header>
    )
}

export default NavbarTop