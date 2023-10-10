import React from "react";
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavbarTop from './components/navbar.component';
import Footer from './components/footer.component';
import { Home } from './components/home.component';
import About from './components/about.component';
import NoteState from './context/notes/NoteState';
import Statebook from "./context/statebook";

import Form from "./components/Form"

import CreateStudent from './components/create-student.component';

function App() {
	return (
		<>

			<Statebook>
				<Router>
					<NavbarTop />
					<div className="container">
						<Routes>
							<Route exact path="/home" element={<Home />} />
							<Route exact path="/about" element={<About />} />
							<Route exact path="/create-user" element={<CreateStudent />} />
							<Route exact path ='/form' element = {<Form/>}/>
							
							<Route
								path="*"
								element={
									<div>
										<h2>404 Page not found etc</h2>
									</div>
								}
							/>
						</Routes>
					</div>
					<Footer />
				</Router>

			</Statebook>
		</>
	);
}

export default App;