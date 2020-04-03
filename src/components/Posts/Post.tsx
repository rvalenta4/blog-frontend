import React, { FC } from 'react'
import { Card, Button } from 'react-bootstrap'
import { IPost } from './interfaces'
import moment from 'moment'

interface IProps {
	post: IPost
}

const Post: FC<IProps> = ({ post }) => {
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

export default Post
