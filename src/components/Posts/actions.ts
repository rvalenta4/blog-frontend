import axios from 'axios'
import { IPost, IAction } from './interfaces'
import API from '../../api'
import { EPostActions } from './enums'
import { TPostPost, TGetPosts, TGetPost, TPatchPost, TDeletePost } from './types'
import { Dispatch } from 'redux'

export const postPostStarted = (): IAction<EPostActions.POST_POST_STARTED, null> => ({
	type: EPostActions.POST_POST_STARTED,
	payload: null
})

export const postPostSucceeded = (post: IPost): IAction<EPostActions.POST_POST_SUCCEEDED, IPost> => ({
	type: EPostActions.POST_POST_SUCCEEDED,
	payload: post
})

export const postPostFailed = (error: Error): IAction<EPostActions.POST_POST_FAILED, Error> => ({
	type: EPostActions.POST_POST_FAILED,
	payload: error
})

export const getPostsStarted = (): IAction<EPostActions.GET_POSTS_STARTED, null> => ({
	type: EPostActions.GET_POSTS_STARTED,
	payload: null
})

export const getPostsSucceeded = (posts: IPost[]): IAction<EPostActions.GET_POSTS_SUCCEEDED, IPost[]> => ({
	type: EPostActions.GET_POSTS_SUCCEEDED,
	payload: posts
})

export const getPostsFailed = (error: Error): IAction<EPostActions.GET_POSTS_FAILED, Error> => ({
	type: EPostActions.GET_POSTS_FAILED,
	payload: error
})

export const getPostStarted = (): IAction<EPostActions.GET_POST_STARTED, null> => ({
	type: EPostActions.GET_POST_STARTED,
	payload: null
})

export const getPostSucceeded = (post: IPost): IAction<EPostActions.GET_POST_SUCCEEDED, IPost> => ({
	type: EPostActions.GET_POST_SUCCEEDED,
	payload: post
})

export const getPostFailed = (error: Error): IAction<EPostActions.GET_POST_FAILED, Error> => ({
	type: EPostActions.GET_POST_FAILED,
	payload: error
})

export const patchPostStarted = (): IAction<EPostActions.PATCH_POST_STARTED, null> => ({
	type: EPostActions.PATCH_POST_STARTED,
	payload: null
})

export const patchPostSucceeded = (post: IPost): IAction<EPostActions.PATCH_POST_SUCCEEDED, IPost> => ({
	type: EPostActions.PATCH_POST_SUCCEEDED,
	payload: post
})

export const patchPostFailed = (error: Error): IAction<EPostActions.PATCH_POST_FAILED, Error> => ({
	type: EPostActions.PATCH_POST_FAILED,
	payload: error
})

export const deletePostStarted = (): IAction<EPostActions.DELETE_POST_STARTED, null> => ({
	type: EPostActions.DELETE_POST_STARTED,
	payload: null
})

export const deletePostSucceeded = (post: IPost): IAction<EPostActions.DELETE_POST_SUCCEEDED, IPost> => ({
	type: EPostActions.DELETE_POST_SUCCEEDED,
	payload: post
})

export const deletePostFailed = (error: Error): IAction<EPostActions.DELETE_POST_FAILED, Error> => ({
	type: EPostActions.DELETE_POST_FAILED,
	payload: error
})

export const postPost = () => async (dispatch: Dispatch<TPostPost>): Promise<void> => {
	dispatch(postPostStarted())

	try {
		const { data: post }: { data: IPost } = await axios.post(`${API}/posts/`)
		dispatch(postPostSucceeded(post))
	} catch (error) {
		dispatch(postPostFailed(error))
	}
}

export const getPosts = (search?: string) => async (dispatch: Dispatch<TGetPosts>): Promise<void> => {
	dispatch(getPostsStarted())

	try {
		const { data: posts }: { data: IPost[] } = search
			? await axios.get(`${API}/posts`, { params: { search } })
			: await axios.get(`${API}/posts`)

		dispatch(getPostsSucceeded(posts))
	} catch (error) {
		dispatch(getPostsFailed(error))
	}
}

export const getPost = (id: string) => async (dispatch: Dispatch<TGetPost>): Promise<void> => {
	dispatch(getPostStarted())

	try {
		const { data: post }: { data: IPost } = await axios.get(`${API}/posts/${id}`)
		dispatch(getPostSucceeded(post))
	} catch (error) {
		dispatch(getPostFailed(error))
	}
}

export const patchPost = (id: string) => async (dispatch: Dispatch<TPatchPost>): Promise<void> => {
	dispatch(patchPostStarted())

	try {
		const { data: post }: { data: IPost } = await axios.patch(`${API}/posts/${id}`)
		dispatch(patchPostSucceeded(post))
	} catch (error) {
		dispatch(patchPostFailed(error))
	}
}

export const deletePost = (id: string) => async (dispatch: Dispatch<TDeletePost>): Promise<void> => {
	dispatch(deletePostStarted())

	try {
		const { data: post }: { data: IPost } = await axios.delete(`${API}/posts/${id}`)
		dispatch(deletePostSucceeded(post))
	} catch (error) {
		dispatch(deletePostFailed(error))
	}
}
