//import logo from './logo.svg';
import React from "react";

//import ReactDOM from 'react-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
//import Card from 'react-bootstrap/Card';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//import NoteState from './context/notes/NoteState';
//export const UserContext = React.createContext();

import Home from './components/home.component';
import About from './components/about.component';
import CreateStudent from './components/create-student.component';

function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
						<Container>
							{/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
							<Navbar.Brand>
								<Link exact to={'/home'} className="nav-link">
									<Image src="http://picsum.photos/150/50" fluid rounded className="App-logo" alt="logo" />
								</Link>
							</Navbar.Brand>
							
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="me-auto">
									{/*<Nav.Link href="#home">Home</Nav.Link> */}
									<Link exact to={'/home'} className="nav-link">Home</Link>
									<Link exact to={'/about'} className="nav-link">About</Link>
									<Link exact to={'/create-user'} className="nav-link">Create User</Link>
									
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
						</Container>
					</Navbar>
					
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/create-user" element={<CreateStudent />} />
						
						<Route
							path="*"
							element={
							  <div>
								<h2>404 Page not found etc</h2>
							  </div>
							}
						/>
					</Routes>					
				</header>
			</Router>
			
			<footer class="py-5 my-5 mb-0 bg-dark">
				<Container className="px-4">
					<p class="text-white text-center">Copyrights &copy; Your website 2023</p>
				</Container>
			</footer>
		</div>
	);
}

export default App;