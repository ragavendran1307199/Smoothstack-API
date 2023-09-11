import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

interface NavbarProps {
  adminBool: boolean
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const clearToken = () => {
    Cookies.remove('auth')
  }
  return (
    <div>
      <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
        <Container>
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
          <div>
            {props.adminBool && <Button
              style={{ position: "relative", marginRight: "10px" }}
            >
              <Nav.Link as={NavLink} to="/admin">Admin Panel</Nav.Link>
            </Button>}
            <Button
            >
              <Nav.Link as={NavLink} onClick={clearToken} to="/login">Sign Out</Nav.Link>
            </Button>
          </div>
        </Container>
      </NavbarBs>
    </div>
  )
}

export { Navbar }