import {
	PostPostStarted,
	PostPostSucceeded,
	PostPostFailed,
	GetPostsStarted,
	GetPostsSucceeded,
	GetPostsFailed,
	GetPostStarted,
	GetPostSucceeded,
	GetPostFailed,
	PatchPostStarted,
	PatchPostSucceeded,
	PatchPostFailed,
	DeletePostStarted,
	DeletePostSucceeded,
	DeletePostFailed
} from './interfaces'

export type PostActions =
	| PostPostStarted
	| PostPostSucceeded
	| PostPostFailed
	| GetPostsStarted
	| GetPostsSucceeded
	| GetPostsFailed
	| GetPostStarted
	| GetPostSucceeded
	| GetPostFailed
	| PatchPostStarted
	| PatchPostSucceeded
	| PatchPostFailed
	| DeletePostStarted
	| DeletePostSucceeded
	| DeletePostFailed
