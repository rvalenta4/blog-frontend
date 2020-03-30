import axios from 'axios'
import { Dispatch } from 'react'
import {
	PostType,
	GetPostsStarted,
	GetPostsSucceeded,
	GetPostsFailed,
	GetPostStarted,
	GetPostSucceeded,
	GetPostFailed,
	PostPostStarted,
	PostPostSucceeded,
	PostPostFailed,
	PatchPostStarted,
	PatchPostSucceeded,
	PatchPostFailed,
	DeletePostStarted,
	DeletePostSucceeded,
	DeletePostFailed
} from './interfaces'
import API from '../../api'
import { PostActionTypes } from './enums'
import { PostActions } from './types'

export const postPostStarted = (): PostPostStarted => ({
	type: PostActionTypes.POST_POST_STARTED
})

export const postPostSucceeded = (post: PostType): PostPostSucceeded => ({
	type: PostActionTypes.POST_POST_SUCCEEDED,
	payload: post
})

export const postPostFailed = (error: Error): PostPostFailed => ({
	type: PostActionTypes.POST_POST_FAILED,
	payload: error
})

export const getPostsStarted = (): GetPostsStarted => ({
	type: PostActionTypes.GET_POSTS_STARTED
})

export const getPostsSucceeded = (posts: PostType[]): GetPostsSucceeded => ({
	type: PostActionTypes.GET_POSTS_SUCCEEDED,
	payload: posts
})

export const getPostsFailed = (error: Error): GetPostsFailed => ({
	type: PostActionTypes.GET_POSTS_FAILED,
	payload: error
})

export const getPostStarted = (): GetPostStarted => ({
	type: PostActionTypes.GET_POST_STARTED
})

export const getPostSucceeded = (post: PostType): GetPostSucceeded => ({
	type: PostActionTypes.GET_POST_SUCCEEDED,
	payload: post
})

export const getPostFailed = (error: Error): GetPostFailed => ({
	type: PostActionTypes.GET_POST_FAILED,
	payload: error
})

export const patchPostStarted = (): PatchPostStarted => ({
	type: PostActionTypes.PATCH_POST_STARTED
})

export const patchPostSucceeded = (post: PostType): PatchPostSucceeded => ({
	type: PostActionTypes.PATCH_POST_SUCCEEDED,
	payload: post
})

export const patchPostFailed = (error: Error): PatchPostFailed => ({
	type: PostActionTypes.PATCH_POST_FAILED,
	payload: error
})

export const deletePostStarted = (): DeletePostStarted => ({
	type: PostActionTypes.DELETE_POST_STARTED
})

export const deletePostSucceeded = (post: PostType): DeletePostSucceeded => ({
	type: PostActionTypes.DELETE_POST_SUCCEEDED,
	payload: post
})

export const deletePostFailed = (error: Error): DeletePostFailed => ({
	type: PostActionTypes.DELETE_POST_FAILED,
	payload: error
})

export const postPost = async (dispatch: Dispatch<PostActions>): Promise<void> => {
	dispatch(postPostStarted())

	try {
		const { data: post }: { data: PostType } = await axios.post(`${API}/posts/`)
		dispatch(postPostSucceeded(post))
	} catch (error) {
		dispatch(postPostFailed(error))
	}
}

export const getPosts = async (dispatch: Dispatch<PostActions>, search?: string): Promise<void> => {
	dispatch(getPostsStarted())

	try {
		const { data: posts }: { data: PostType[] } = search
			? await axios.get(`${API}/posts`, { params: { search } })
			: await axios.get(`${API}/posts`)

		dispatch(getPostsSucceeded(posts))
	} catch (error) {
		dispatch(getPostsFailed(error))
	}
}

export const getPost = async (dispatch: Dispatch<PostActions>, id: string): Promise<void> => {
	dispatch(getPostStarted())

	try {
		const { data: post }: { data: PostType } = await axios.get(`${API}/posts/${id}`)
		dispatch(getPostSucceeded(post))
	} catch (error) {
		dispatch(getPostFailed(error))
	}
}

export const patchPost = async (dispatch: Dispatch<PostActions>, id: string): Promise<void> => {
	dispatch(patchPostStarted())

	try {
		const { data: post }: { data: PostType } = await axios.patch(`${API}/posts/${id}`)
		dispatch(patchPostSucceeded(post))
	} catch (error) {
		dispatch(patchPostFailed(error))
	}
}

export const deletePost = async (dispatch: Dispatch<PostActions>, id: string): Promise<void> => {
	dispatch(deletePostStarted())

	try {
		const { data: post }: { data: PostType } = await axios.delete(`${API}/posts/${id}`)
		dispatch(deletePostSucceeded(post))
	} catch (error) {
		dispatch(deletePostFailed(error))
	}
}
