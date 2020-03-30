import { PostActionTypes } from './enums'

export interface PostType {
	id: string
	title: string
	body: string
	createdAt: number
}

export interface PostPostStarted {
	type: PostActionTypes.POST_POST_STARTED
}

export interface PostPostSucceeded {
	type: PostActionTypes.POST_POST_SUCCEEDED
	payload: PostType
}

export interface PostPostFailed {
	type: PostActionTypes.POST_POST_FAILED
	payload: Error
}

export interface GetPostsStarted {
	type: PostActionTypes.GET_POSTS_STARTED
}

export interface GetPostsSucceeded {
	type: PostActionTypes.GET_POSTS_SUCCEEDED
	payload: PostType[]
}

export interface GetPostsFailed {
	type: PostActionTypes.GET_POSTS_FAILED
	payload: Error
}

export interface GetPostStarted {
	type: PostActionTypes.GET_POST_STARTED
}

export interface GetPostSucceeded {
	type: PostActionTypes.GET_POST_SUCCEEDED
	payload: PostType
}

export interface GetPostFailed {
	type: PostActionTypes.GET_POST_FAILED
	payload: Error
}

export interface PatchPostStarted {
	type: PostActionTypes.PATCH_POST_STARTED
}

export interface PatchPostSucceeded {
	type: PostActionTypes.PATCH_POST_SUCCEEDED
	payload: PostType
}

export interface PatchPostFailed {
	type: PostActionTypes.PATCH_POST_FAILED
	payload: Error
}

export interface DeletePostStarted {
	type: PostActionTypes.DELETE_POST_STARTED
}

export interface DeletePostSucceeded {
	type: PostActionTypes.DELETE_POST_SUCCEEDED
	payload: PostType
}

export interface DeletePostFailed {
	type: PostActionTypes.DELETE_POST_FAILED
	payload: Error
}

export interface PostsState {
	post: PostType | null
	posts: PostType[]
	postingPost: boolean
	gettingPosts: boolean
	gettingPost: boolean
	patchingPost: boolean
	deletingPost: boolean
	postPostError: Error | null
	getPostsError: Error | null
	getPostError: Error | null
	patchPostError: Error | null
	deletePostError: Error | null
}
