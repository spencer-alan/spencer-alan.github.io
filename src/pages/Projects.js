import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Nav from "../components/Nav/nav";
import Footer from "../components/Footer/footer"
import { Container, Row, Col } from "../components/Grid";
import Card from "../components/Card/card";


function Projects() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-4">
            <Card />
          </Col>
          <Col size="md-4">
            <Card />
          </Col>
          <Col size="md-4">
            <Card />
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Card />
          </Col>
          <Col size="md-4">
            <Card />
          </Col>
          <Col size="md-4">
            <Card />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Projects;