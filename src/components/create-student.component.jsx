import React, { Component } from "react";
import Form from 'react-bootstrap/Form'


import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', rollno: '' })
  }

  render() {
    return (
	<main>
		<Container>
			<Row className="px-4 my-5" >
				<Col sm={3}></Col>
				<Col sm={6}><div className="form-wrapper">
				<h1>Create Users Form</h1>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Student
        </Button>
      </Form>
    </div>
				</Col>
				<Col sm={3}></Col>
			</Row>
		</Container>
	</main>	);
  }
}