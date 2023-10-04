import React from "react";
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavbarTop from './components/navbar.component';
import Footer from './components/footer.component';
import { Home } from './components/home.component';
import About from './components/about.component';
import NoteState from './context/notes/NoteState';

import CreateStudent from './components/create-student.component';

function App() {
	return (
		<>
			<NoteState>
				<Router>
					<NavbarTop />
					<div className="container">
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
					</div>
					<Footer />
				</Router>
			</NoteState>
		</>
	);
}

export default App;