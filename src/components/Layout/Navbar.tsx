import React from 'react'
import { Navbar, Nav, Form, FormControl, InputGroup } from 'react-bootstrap'
import { getPosts } from '../Posts/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default () => {
	const dispatch = useDispatch()

	const handleSearch = (e: React.SyntheticEvent<HTMLInputElement>): void => {
		getPosts(dispatch, e.currentTarget.value)
	}

	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand as={Link} to='/'>
					Roman's Blog
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link as={Link} to='/login'>
							Login
						</Nav.Link>
						<Nav.Link as={Link} to='registration'>
							Registration
						</Nav.Link>
					</Nav>
					<Form inline>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type='text'
								placeholder='Search for post'
								className='mr-sm-2'
								onChange={handleSearch}
							/>
						</InputGroup>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}
