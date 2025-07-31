'use client';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import Techstack from "./TechStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../public/about.png";
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
            <Techstack iconName="devicon-javascript-plain" />
            <Techstack iconName="devicon-typescript-plain" />
            <Techstack iconName="devicon-python-plain" />
            <Techstack iconName="devicon-bash-plain" />
            <Techstack iconName="devicon-nodejs-plain-wordmark" />
            <Techstack iconName="devicon-express-original-wordmark" />
            <Techstack iconName="devicon-nestjs-plain" />
            <Techstack iconName="devicon-react-original-wordmark" />
            <Techstack iconName="devicon-gatsby-plain-wordmark" />
            <Techstack iconName="devicon-nextjs-original-wordmark" />
            <Techstack iconName="devicon-graphql-plain-wordmark" />
            <Techstack iconName="devicon-bootstrap-plain-wordmark" />
            <Techstack iconName="devicon-css3-plain-wordmark" />
            <Techstack iconName="devicon-html5-plain-wordmark" />
            <Techstack iconName="devicon-postgresql-plain" />
            <Techstack iconName="devicon-mongodb-plain" />
          </Row>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Techstack iconName="devicon-visualstudio-plain" />
            <Techstack iconName="devicon-pycharm-plain" />
            <Techstack iconName="devicon-amazonwebservices-plain-wordmark" />
            <Techstack iconName="devicon-kubernetes-plain" />
            <Techstack iconName="devicon-docker-plain-wordmark" />
            <Techstack iconName="devicon-git-plain-wordmark" />
            <Techstack iconName="devicon-heroku-original" />
            <Techstack iconName="devicon-apachekafka-original" />
          </Row>
          <Github />
        </Container>
      </Container>
    </CoreLayout>
  );
}

export default About;