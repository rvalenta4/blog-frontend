import React, { useState, SyntheticEvent, FC } from 'react'
import FormLayout, { Field } from '../Layout/FormLayout'

const fields: Field[] = [
	{ controlId: 'formGroupEmail', type: 'email', label: 'Email', name: 'email' },
	{ controlId: 'formGroupPassword', type: 'password', label: 'Password', name: 'password' }
]

interface Login {
	email: string
	password: string
}

const Login: FC = () => {
	const [state, setState]: [Login, Function] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
		const { name, value } = e.currentTarget
		setState({ ...state, [name]: value })
	}

	return <FormLayout fields={fields} header='Login' handleChange={handleChange} />
}

export default Login
