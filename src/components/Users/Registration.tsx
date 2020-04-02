import React, { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'

interface Registration {
	name: string
	surname: string
	username: string
	email: string
	password: string
}

export default function Registration() {
	const [state, setState]: [Registration, Function] = useState({
		name: '',
		surname: '',
		username: '',
		email: '',
		password: ''
	})

	const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
		const { name, value } = e.currentTarget
		setState({ ...state, [name]: value })
	}

	return (
		<Card className='mt-5'>
			<Card.Header className='font-weight-bold'>Registration form</Card.Header>
			<Card.Body>
				<Form>
					<Form.Group controlId='formGroupName'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							value={state.name}
							name='name'
							type='text'
							placeholder='Name'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId='formGroupSurname'>
						<Form.Label>Surname</Form.Label>
						<Form.Control
							value={state.surname}
							name='surname'
							type='text'
							placeholder='Surname'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId='formGroupUsername'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							value={state.username}
							name='username'
							type='text'
							placeholder='Username'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId='formGroupEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							value={state.email}
							name='email'
							type='text'
							placeholder='Email'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId='formGroupPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							value={state.password}
							name='password'
							type='password'
							placeholder='Password'
							onChange={handleChange}
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Card.Body>
			<Card.Footer>All rights reserved</Card.Footer>
		</Card>
	)
}
