import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../redux/interfaces'
import Post from './Post'
import { useParams } from 'react-router-dom'
import { getPost } from './actions'

const PostDetail: FC = () => {
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		id && dispatch(getPost(id))
	}, [dispatch, id])

	const post = useSelector((state: IState) => state.posts.post)

	return post && <Post post={post}></Post>
}

export default PostDetail
