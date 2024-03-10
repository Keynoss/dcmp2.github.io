import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import axios from 'axios';



const Container = styled.div`
  position: relative;
`

function MessageForm() {
  const [inquiry, setInquiry] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    address: "",
    message_inquiry: ""
  });


  const handleChange = (e) => {
    setInquiry((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  // Submit Handler for posting Inquiry details and nodemailer
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/inquiry", inquiry);

      alert(`Thank you ${inquiry.first_name} ${inquiry.last_name} for sending us message. we will get you back on your email: ${inquiry.email}`);

      window.location.reload();

    } catch (e) {
      console.log(e);
    }
  }

  return (

    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label><PersonIcon /> First Name:</Form.Label>
            <Form.Control type="text" name="first_name" placeholder="First Name" onChange={handleChange} required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label><Person2OutlinedIcon /> Last Name:</Form.Label>
            <Form.Control name="last_name" type="text" placeholder="Last Name" onChange={handleChange} required />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridContactNum">
            <Form.Label><ContactPhoneIcon /> Contact Number:</Form.Label>
            <Form.Control type="number" placeholder="Contact Number" name="contact_number" onChange={handleChange} required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label><EmailIcon /> Email Address:</Form.Label>
            <Form.Control type="text" placeholder="Email Address" name="email" onChange={handleChange} required />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label><LocationOnIcon /> Address</Form.Label>
          <Form.Control placeholder="Address" name="address" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="textArea">
          <Form.Label><BubbleChartIcon /> Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message_inquiry" onChange={handleChange} required />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit <SendIcon />
        </Button>
      </Form>

    </Container>

  );
}

export default MessageForm;