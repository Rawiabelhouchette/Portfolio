'use client';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import Techstack from "./TechStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../public/abouut.png";
import Image from "next/image";
import CoreLayout from "../Shared/core.layout";
import Github from "./GithubCalendar";
import TopScroll from "../components/ScrollToTop";

function About() {
  return (
    <CoreLayout>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <TopScroll />
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I&apos;M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <Image src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* Langages & Scripts */}
            <Techstack iconName="devicon-java-plain" />
            <Techstack iconName="devicon-javascript-plain" />
            <Techstack iconName="devicon-python-plain" />
            <Techstack iconName="devicon-typescript-plain" />
            <Techstack iconName="devicon-dart-plain" />
            </Row>
            
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              {/* Backend */}
              <Techstack iconName="devicon-spring-plain-wordmark" />
              <Techstack iconName="devicon-nodejs-plain-wordmark" />
              <Techstack iconName="devicon-dot-net-plain-wordmark" />
              <Techstack iconName="devicon-express-original-wordmark" />
              </Row>
              
              <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {/* Frontend */}
                <Techstack iconName="devicon-angularjs-plain" />
                <Techstack iconName="devicon-react-original-wordmark" />
                <Techstack iconName="devicon-html5-plain-wordmark" />
                <Techstack iconName="devicon-css3-plain-wordmark" />
                </Row>
                
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                  {/* Mobile Dev */}
                  <Techstack iconName="devicon-android-plain" />
                  <Techstack iconName="devicon-flutter-plain" />
                  </Row>
                  
                  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    {/* Bases de Données */}
                    <Techstack iconName="devicon-mongodb-plain" />
                    <Techstack iconName="devicon-sqlite-plain" />
                    </Row>
                    
                    <h1 className="project-heading">
                      <strong className="purple">Tools</strong> I use
                      </h1>
                      
                      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        <Techstack iconName="devicon-git-plain-wordmark" />
                        <Techstack iconName="devicon-postman-plain" />
                        <Techstack iconName="devicon-firebase-plain" />
                        <Techstack iconName="devicon-figma-plain" />
                        <Techstack iconName="devicon-bootstrap-plain-wordmark" />
                        </Row>
          <Github />
        </Container>
      </Container>
    </CoreLayout>
  );
}

export default About;