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
                title="French CV"
                description="CV professionnel en français."
                cvLink="/CV_Rawya.pdf"
                previewLink="/CV_Rawya.pdf"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </CoreLayout>
  );
}
