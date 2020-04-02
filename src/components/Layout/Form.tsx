import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export interface Field {
	name: string
	controlId: string
	label: string
	type: string
}

export default ({
	header,
	fields,
	handleChange
}: {
	fields: Field[]
	header: string
	handleChange: (e: React.SyntheticEvent<HTMLInputElement>) => void
}) => {
	return (
		<Card style={{ width: '30rem' }}>
			<Card.Header style={{ fontWeight: 'bold' }}>{header}</Card.Header>
			<Card.Body>
				<Form>
					{fields.map(field => (
						<Form.Group key={field.controlId} controlId={field.controlId}>
							<Form.Label>{field.label}</Form.Label>
							<Form.Control
								name={field.name}
								type={field.type}
								placeholder={field.label}
								onChange={handleChange}
							/>
						</Form.Group>
					))}
				</Form>
			</Card.Body>
			<Card.Footer>
				<Button type='submit'>Submit</Button>
			</Card.Footer>
		</Card>
	)
}
