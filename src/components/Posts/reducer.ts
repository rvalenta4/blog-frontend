import produce, { Draft } from 'immer'
import { PostActionTypes } from './enums'
import { PostsState } from './interfaces'
import { PostActions } from './types'

const initialState: PostsState = {
	post: null,
	posts: [],
	postingPost: false,
	gettingPosts: false,
	gettingPost: false,
	patchingPost: false,
	deletingPost: false,
	postPostError: null,
	getPostsError: null,
	getPostError: null,
	patchPostError: null,
	deletePostError: null
}

export const postsReducer = (state: PostsState = initialState, action: PostActions): PostsState => {
	return produce(state, (draft: Draft<PostsState>): void => {
		switch (action.type) {
			case PostActionTypes.POST_POST_STARTED: {
				draft.postingPost = true
				break
			}
			case PostActionTypes.POST_POST_SUCCEEDED: {
				draft.postingPost = false
				draft.posts.push(action.payload)
				break
			}
			case PostActionTypes.POST_POST_FAILED: {
				draft.postingPost = false
				draft.postPostError = action.payload
				break
			}
			case PostActionTypes.GET_POSTS_STARTED: {
				draft.gettingPosts = true
				break
			}
			case PostActionTypes.GET_POSTS_SUCCEEDED: {
				draft.gettingPosts = false
				draft.posts = action.payload
				break
			}
			case PostActionTypes.GET_POSTS_FAILED: {
				draft.gettingPosts = false
				draft.getPostError = action.payload
				break
			}
			case PostActionTypes.GET_POST_STARTED: {
				draft.gettingPost = true
				break
			}
			case PostActionTypes.GET_POST_SUCCEEDED: {
				draft.gettingPost = false
				draft.post = action.payload
				break
			}
			case PostActionTypes.GET_POST_FAILED: {
				draft.gettingPost = false
				draft.getPostError = action.payload
				break
			}
			case PostActionTypes.PATCH_POST_STARTED: {
				draft.patchingPost = true
				break
			}
			case PostActionTypes.PATCH_POST_SUCCEEDED: {
				const index = state.posts.findIndex(post => post.id === action.payload.id)
				draft.patchingPost = false
				draft.posts[index] = action.payload
				break
			}
			case PostActionTypes.PATCH_POST_FAILED: {
				draft.patchingPost = false
				draft.postPostError = action.payload
				break
			}
			case PostActionTypes.DELETE_POST_STARTED: {
				draft.deletingPost = true
				break
			}
			case PostActionTypes.DELETE_POST_SUCCEEDED: {
				const index = state.posts.findIndex(post => post.id === action.payload.id)
				draft.deletingPost = false
				draft.posts.splice(index, 1)
				break
			}
			case PostActionTypes.DELETE_POST_FAILED: {
				draft.deletingPost = false
				draft.deletePostError = action.payload
				break
			}
			default:
				break
		}
	})
}

export default postsReducer
