import React, { useState, SyntheticEvent } from 'react'
import Form, { Field } from '../Layout/Form'

interface Registration {
	name: string
	surname: string
	username: string
	email: string
	password: string
}

const fields: Field[] = [
	{ controlId: 'formGroupName', type: 'text', label: 'Name', name: 'name' },
	{ controlId: 'formGroupSurname', type: 'text', label: 'Surname', name: 'surname' },
	{ controlId: 'formGroupUsername', type: 'text', label: 'Username', name: 'username' },
	{ controlId: 'formGroupEmail', type: 'email', label: 'Email', name: 'email' },
	{ controlId: 'formGroupPassword', type: 'password', label: 'Password', name: 'password' }
]

export default function Registration() {
	const [state, setState]: [Registration, Function] = useState({
		name: '',
		surname: '',
		username: '',
		email: '',
		password: ''
	})

	const handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
		const { name, value } = e.currentTarget
		setState({ ...state, [name]: value })
	}

	return <Form fields={fields} header='Registration' handleChange={handleChange} />
}
