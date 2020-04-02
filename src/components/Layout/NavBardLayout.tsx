import React, { SyntheticEvent, FC } from 'react'
import { Navbar, Nav, Form, FormControl, InputGroup } from 'react-bootstrap'
import { getPosts } from '../Posts/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaSearch, FaArrowRight, FaUserPlus } from 'react-icons/fa'

const NavbarLayout: FC = () => {
	const dispatch = useDispatch()

	const handleSearch = (e: SyntheticEvent<HTMLInputElement>): void => {
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
							<FaArrowRight className='mb-1' />
							<span className='ml-2'>Login</span>
						</Nav.Link>
						<Nav.Link as={Link} to='registration'>
							<FaUserPlus className='mb-1' />
							<span className='ml-2'>Registration</span>
						</Nav.Link>
					</Nav>
					<Form inline>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id='basic-addon1'>
									<FaSearch />
								</InputGroup.Text>
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

export default NavbarLayout
