import {
	postPostStarted,
	postPostSucceeded,
	postPostFailed,
	getPostsStarted,
	getPostsSucceeded,
	getPostsFailed,
	getPostStarted,
	getPostSucceeded,
	getPostFailed,
	patchPostStarted,
	patchPostSucceeded,
	patchPostFailed,
	deletePostStarted,
	deletePostSucceeded,
	deletePostFailed
} from './actions'

export type TPostPost = ReturnType<typeof postPostStarted | typeof postPostSucceeded | typeof postPostFailed>

export type TGetPosts = ReturnType<typeof getPostsStarted | typeof getPostsSucceeded | typeof getPostsFailed>

export type TGetPost = ReturnType<typeof getPostStarted | typeof getPostSucceeded | typeof getPostFailed>

export type TPatchPost = ReturnType<typeof patchPostStarted | typeof patchPostSucceeded | typeof patchPostFailed>

export type TDeletePost = ReturnType<typeof deletePostStarted | typeof deletePostSucceeded | typeof deletePostFailed>

export type TPostAction = TPostPost | TGetPosts | TGetPost | TPatchPost | TDeletePost
