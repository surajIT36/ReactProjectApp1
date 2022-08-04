import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const styleContact = {
    width: '40rem',
    margin: 'auto',
    top: '50px',
    background: 'radial-gradient(circle, rgba(148,187,233,1) 7%, rgba(238,174,202,1) 100%)',
}
const Contact = () => {
    return (
        <>
            <Card  style={styleContact}>
                <Card.Body>
                    <Card.Title>Contact Us</Card.Title>
                    <Card.Text>
                        <>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" placeholder="Contact number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Message</Form.Label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </>      
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    );
};

export default Contact;
