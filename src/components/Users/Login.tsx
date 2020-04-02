import React, { useState } from 'react'
import Form, { Field } from '../Layout/Form'

interface Login {
	email: string
	password: string
}

const fields: Field[] = [
	{ controlId: 'formGroupEmail', type: 'email', label: 'Email', name: 'email' },
	{ controlId: 'formGroupPassword', type: 'password', label: 'Password', name: 'password' }
]

export default function Login() {
	const [state, setState]: [Login, Function] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
		const { name, value } = e.currentTarget
		setState({ ...state, [name]: value })
	}

	return <Form fields={fields} header='Login' handleChange={handleChange} />
}
