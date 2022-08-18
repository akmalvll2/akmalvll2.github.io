import React from 'react'
import '../homepage/Homepage.css'
import { Container,Button,Row,Col } from 'react-bootstrap'
import CV from '../../asset/BadrulAkmalResume.pdf'

const Homepage = () => {
  return (
    <div>
        <Container className="main-content">
            <Row>
                <Col><h1>I am a Web Developer, Learner and Future Web Tech Specialist</h1></Col>
            </Row>
            <Row>
                <Col><Button href={CV} variant="custom" download> Download C </Button></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Homepage