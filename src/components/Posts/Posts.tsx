import React, { useEffect, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from './actions'
import Post from './Post'
import { Row } from 'react-bootstrap'
import { RootState } from '../../redux/interfaces'

const Posts: FC = () => {
	const posts = useSelector((state: RootState) => state.posts.posts)
	const dispatch = useDispatch()

	useEffect(() => {
		getPosts(dispatch)
	}, [dispatch])

	return <Row>{posts && posts.map(post => <Post key={post.id} post={post} />)}</Row>
}

export default Posts
