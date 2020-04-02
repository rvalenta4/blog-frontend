import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			<Container className='d-flex justify-content-center py-4'>{children}</Container>
		</>
	)
}

export default Layout
