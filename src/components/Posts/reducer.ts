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
	switch (action.type) {
		case PostActionTypes.POST_POST_STARTED: {
			return { ...state, postingPost: true }
		}
		case PostActionTypes.POST_POST_SUCCEEDED: {
			return { ...state, postingPost: false, posts: [...state.posts, action.payload] }
		}
		case PostActionTypes.POST_POST_FAILED: {
			return { ...state, postingPost: false, postPostError: action.payload }
		}
		case PostActionTypes.GET_POSTS_STARTED: {
			return { ...state, gettingPosts: true }
		}
		case PostActionTypes.GET_POSTS_SUCCEEDED: {
			return { ...state, gettingPosts: false, posts: action.payload }
		}
		case PostActionTypes.GET_POSTS_FAILED: {
			return { ...state, gettingPosts: false, getPostError: action.payload }
		}
		case PostActionTypes.GET_POST_STARTED: {
			return { ...state, gettingPost: true }
		}
		case PostActionTypes.GET_POST_SUCCEEDED: {
			return { ...state, gettingPost: false, post: action.payload }
		}
		case PostActionTypes.GET_POST_FAILED: {
			return { ...state, gettingPost: false, getPostError: action.payload }
		}
		case PostActionTypes.PATCH_POST_STARTED: {
			return { ...state, patchingPost: true }
		}
		case PostActionTypes.PATCH_POST_SUCCEEDED: {
			const index = state.posts.findIndex(post => post.id === action.payload.id)
			const newPosts = [...state.posts]
			newPosts[index] = action.payload
			return { ...state, patchingPost: false, posts: newPosts }
		}
		case PostActionTypes.PATCH_POST_FAILED: {
			return { ...state, patchingPost: false, postPostError: action.payload }
		}
		case PostActionTypes.DELETE_POST_STARTED: {
			return { ...state, deletingPost: true }
		}
		case PostActionTypes.DELETE_POST_SUCCEEDED: {
			const index = state.posts.findIndex(post => post.id === action.payload.id)
			const newPosts = [...state.posts]
			newPosts.splice(index, 1)
			return { ...state, deletingPost: false, posts: newPosts }
		}
		case PostActionTypes.DELETE_POST_FAILED: {
			return { ...state, deletingPost: false, deletePostError: action.payload }
		}
		default:
			return state
	}
}

export default postsReducer
