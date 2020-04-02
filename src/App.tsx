import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Posts from './components/Posts/Posts'
import Login from './components/Users/Login'
import Registration from './components/Users/Registration'
import Layout from './components/Layout/Layout'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
	return (
		<Router>
			<Layout>
				<Route exact path='/' component={Posts} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/registration' component={Registration} />
			</Layout>
		</Router>
	)
}

export default App
