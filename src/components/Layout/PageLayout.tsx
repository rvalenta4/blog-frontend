import React, { ReactNode, FC } from 'react'
import NavbarLayout from './NavBardLayout'
import { Container } from 'react-bootstrap'

interface IProps {
	children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<NavbarLayout />
			<Container className='d-flex justify-content-center py-4'>{children}</Container>
		</>
	)
}

export default Layout
