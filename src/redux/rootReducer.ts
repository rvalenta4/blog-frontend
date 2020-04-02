import { combineReducers } from 'redux'
import postsReducer from '../components/Posts/reducer'

const rootReducer = combineReducers({
	posts: postsReducer
})

export default rootReducer
