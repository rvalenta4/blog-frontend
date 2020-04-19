import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Posts from './components/Posts/Posts'
import Login from './components/Users/Login'
import Registration from './components/Users/Registration'
import PageLayout from './components/Layout/PageLayout'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import PostDetail from './components/Posts/PostDetail'

const App = () => {
	return (
		<Router>
			<PageLayout>
				<Route exact path='/' component={Posts} />
				<Route exact path='/posts/:id' component={PostDetail} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/registration' component={Registration} />
			</PageLayout>
		</Router>
	)
}

export default App
