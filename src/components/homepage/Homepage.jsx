import React from 'react'
import '../homepage/Homepage.css'
import { Container,Button,Row,Col } from 'react-bootstrap'
import CV from '../../asset/BadrulAkmalResume.pdf'

const Homepage = () => {
  return (
    <div>
        <Container className="main-content">
            <Row>
                <Col><h1>I am a Web Developer, <br/>Learner and <br/>Future Web Tech Specialist</h1></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Homepage
