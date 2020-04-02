import React, { ReactNode } from 'react'
import { Navigation } from './Navbar'
import { Container } from 'react-bootstrap'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navigation />
			<Container>{children}</Container>
		</>
	)
}

export default Layout
