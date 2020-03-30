import React from 'react'
import { Form, Card } from 'react-bootstrap'

export default function Login() {
	return (
		<Card style={{ width: '30rem' }}>
			<Card.Header style={{ fontWeight: 'bold' }}>Login form</Card.Header>
			<Card.Body>
				<Form>
					<Form.Group controlId='formGroupEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
					</Form.Group>
					<Form.Group controlId='formGroupPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
				</Form>
			</Card.Body>
			<Card.Footer>All rights reserved</Card.Footer>
		</Card>
	)
}
