"use client";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import CoreLayout from "../Shared/core.layout";
import ChooseCards from "./ChooseCard";

export default function Resume() {
  return (
    <CoreLayout>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <Row>
            <Col md={6} className="project-card">
              <ChooseCards
                title="English CV"
                description="Professional CV in English."
                cvLink="/CV_EN.pdf"
                previewLink="/CV_EN.pdf"
              />
            </Col>
            <Col md={6} className="project-card">
              <ChooseCards
                title="French CV"
                description="CV professionnel en français."
                cvLink="/CV_FR.pdf"
                previewLink="/CV_FR.pdf"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </CoreLayout>
  );
}
