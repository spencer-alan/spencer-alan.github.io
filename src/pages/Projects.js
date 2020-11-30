import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Nav from "../components/Nav/nav";
import Footer from "../components/Footer/footer";
import { Container, Row, Col } from "../components/Grid";
import Card from "../components/Card/card";
import shelf from "../images/screenshots/shelf_kepper_screenshot.png";

function Projects() {
	return (
		<>
			<Nav />
			<Jumbotron />
			<Container>
				<Row>
					<Col size="md-4">
						<Card
							title="Inventory App"
							github="https://github.com/spencer-alan/project-3"
							deployed="#"
							screenshot={shelf}
							info="Final project from UCI Bootcamp. Inventory application to keep track of stock."
						/>
					</Col>
					<Col size="md-4">
						<Card title="" github="" deployed="" screenshot="" info="" />
					</Col>
					<Col size="md-4">
						<Card title="" github="" deployed="" screenshot="" info="" />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default Projects;
