import { Container,Row,Col,Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUpPage() {
    return (
        
        <Container fluid>
            <Row >
                <Col   xs={{offset:0, span:12}} sm={{offset:1, span:10}}  md={{offset:3, span:6}} lg={{offset:4, span:4}} >
                <Card className='p-3 mt-4 Login'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                           
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                       
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Card>
                </Col>
                
            </Row>
        </Container>
       
    );
}

export default SignUpPage;