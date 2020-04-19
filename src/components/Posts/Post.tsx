import React, { FC } from 'react'
import { Card, Button } from 'react-bootstrap'
import { IPost } from './interfaces'
import moment from 'moment'
import { Link } from 'react-router-dom'

interface IProps {
	post: IPost
	isGrid?: boolean
}

const Post: FC<IProps> = ({ post, isGrid }) => {
	return (
		<Card style={{ width: isGrid ? '20rem' : '60rem', margin: '1rem' }}>
			<Card.Header>{moment(post.createdAt).format('MM-DD-YYYY')}</Card.Header>
			<Card.Body>
				<Card.Title>{post.title}</Card.Title>
				<Card.Text>{post.body}</Card.Text>
			</Card.Body>
			{isGrid && (
				<Card.Footer>
					<Button as={Link} to={`posts/${post.id}`}>
						Read
					</Button>
				</Card.Footer>
			)}
		</Card>
	)
}

export default Post
