import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import routes from '../../routes'

const sidebar = [
  {
    path: routes.CATALOGUE,
    name: 'Catalogue'
  },
  {
    path: routes.COLLECTION,
    name: 'Collection'
  },
  {
    path: routes.WISHLIST,
    name: 'Wishlist'
  }
]

const NavBar: React.FC = () => {
  const location = useLocation()

  console.log({ location })

  return (
    <Navbar bg="dark" variant="dark" fixed="top" style={{ borderBottom: 'solid 1px #a3b6c9' }}>
      <Container>
        <Navbar.Brand href="#home">Vinyl Tracker</Navbar.Brand>
        <Nav>
          {sidebar.map((item) => {
            return (
              <Nav.Link key={item.path} href={item.path} active={item.path === location.pathname}>
                {item.name}
              </Nav.Link>
            )
          })}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
