import React, { useEffect, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from './actions'
import Post from './Post'
import { Row, Spinner } from 'react-bootstrap'
import { IState } from '../../redux/interfaces'

const Posts: FC = () => {
	const posts = useSelector((state: IState) => state.posts.posts)
	const gettingPosts = useSelector((state: IState) => state.posts.gettingPosts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	return gettingPosts ? (
		<Spinner animation='grow' />
	) : (
		<Row>{posts && posts.map(post => <Post key={post.id} post={post} />)}</Row>
	)
}

export default Posts
