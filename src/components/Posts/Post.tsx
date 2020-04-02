import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { PostType } from './interfaces'
import moment from 'moment'

export default function Post({ post }: { post: PostType }) {
	return (
		<Card style={{ width: '20rem', margin: '1rem' }}>
			<Card.Header>{moment(post.createdAt).format('MM-DD-YYYY')}</Card.Header>
			<Card.Body>
				<Card.Title>{post.title}</Card.Title>
				<Card.Text>{post.body}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button>Read</Button>
			</Card.Footer>
		</Card>
	)
}
