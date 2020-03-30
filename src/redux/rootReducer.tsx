import { combineReducers } from 'redux'
import postsReducer from '../components/Posts/reducer'
import { PostsState } from '../components/Posts/interfaces'

export interface RootState {
	posts: PostsState
}

const rootReducer = combineReducers({
	posts: postsReducer
})

export default rootReducer
