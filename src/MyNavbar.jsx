import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useSearchParams } from 'react-router-dom';



function MyNavbar() {
  const [searchParams, setSearchParams]= useSearchParams();
  return (
    <Navbar expand="sm" bg='dark' variant='dark'>
      <Container fluid>
        <Navbar.Brand as={Link} to=''>Envaders</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to=' ' >Home</Nav.Link>
            <Nav.Link  as={Link} to='/flex '>FlexBox</Nav.Link>
            <Nav.Link  as={Link} to='/routing '>Routing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='login' >Login</Nav.Link>
            <Nav.Link as={Link} to='signup'>SignUp</Nav.Link>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" 
                    onClick={e=>{
                      setSearchParams({search:e.target.value});
                      
            }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;