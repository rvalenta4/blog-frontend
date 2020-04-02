import React, { useState, SyntheticEvent, FC } from 'react'
import FormLayout, { Field } from '../Layout/FormLayout'

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

const Registration: FC = () => {
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

	return <FormLayout fields={fields} header='Registration' handleChange={handleChange} />
}

export default Registration
