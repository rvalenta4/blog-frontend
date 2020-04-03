export interface IPost {
	id: string
	title: string
	body: string
	createdAt: number
}

export interface IAction<Type, Payload> {
	type: Type
	payload: Payload
}

export interface PostsState {
	post: IPost | null
	posts: IPost[]
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
