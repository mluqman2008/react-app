import React, { Component } from "react";

//import ReactDOM from 'react-dom';

//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
//import axios from 'axios';

export default class About extends Component {
	
	state = {
      name: '',
      email: '',
      rollno: ''
    }

  render() {
    return (<main>
				<Container>
					<Row className="px-4 my-5" >
						<Col sm={8}>
							<Image src="http://picsum.photos/900/400" fluid rounded className="" />
						</Col>
						<Col sm={4}>
							<h1 class="font-weight-light">Tagline</h1>
							<p class="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&acute;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							<Button variant="outline-primary">Call to Action</Button>{' '}
						</Col>
					</Row>
					<Row>
						<Card className="text-center my-5 py-5 text-white bg-secondary">
							<Card.Body>This is some text within a card body.</Card.Body>
						</Card>
					</Row>
					<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="http://picsum.photos/id/200/320/200" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Some quick example text to build on the card title and make up the bulk of the card&acute;s content.</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="http://picsum.photos/id/201/320/200" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Some quick example text to build on the card title and make up the bulk of the card&acute;s content.</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="http://picsum.photos/id/202/320/200" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Some quick example text to build on the card title and make up the bulk of the card&acute;s content.</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					</Row>
					<Row></Row>
					<Row></Row>
				</Container>
			</main>);
  }
}