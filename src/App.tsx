import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap'
import React from 'react'
import Posts from './components/Posts/Posts'
import Login from './components/Users/Login'
import Registration from './components/Users/Registration'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getPosts } from './components/Posts/actions'

function App() {
	const dispatch = useDispatch()

	const handleSearch = (e: React.SyntheticEvent<HTMLInputElement>): void => {
		getPosts(dispatch, e.currentTarget.value)
	}

	return (
		<>
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand>Roman's Blog</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link>Posts</Nav.Link>
						<Nav.Link>Login</Nav.Link>
						<Nav.Link>Registration</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl
							type='text'
							placeholder='Search for post'
							className='mr-sm-2'
							onChange={handleSearch}
						/>
					</Form>
				</Navbar.Collapse>
			</Navbar>
			<Router>
				<Container>
					<Route exact path='/' component={Posts} />
					<Route exact path='/registration' component={Registration} />
					<Route exact path='/login' component={Login} />
				</Container>
			</Router>
		</>
	)
}

export default App
