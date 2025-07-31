"use client";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../components/Particle";
import CoreLayout from "../Shared/core.layout";
import hgLogo from "../../public/projects/hg.jpg";
import talkernLogo from "../../public/projects/talkern.jpg";
import facebookLogo from "../../public/projects/facebook.jpg";
import reduxLogo from "../../public/projects/redux.png";
import reactLogo from "../../public/projects/react.png";
import csgoLogo from "../../public/projects/cs_go.jpg";
import ecommerce from "../../public/projects/ecommerce.jpg";
import dockerLogo from "../../public/projects/docker.png";
import downloadImageLogo from "../../public/projects/download_images.png";
import TopScroll from "../components/ScrollToTop";

export default function Projects() {
  return (
    <CoreLayout>
      <Container fluid className="project-section">
        <Particle />
        <TopScroll />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I&apos;ve worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={talkernLogo} // Replace with the path to your chat app logo or image
                isBlog={false}
                title="Chat Application"
                description="A real-time chat app built with Flask, Socket.IO, PostgreSQL, Next.js, MinIO bucket, and Docker."
                link="https://github.com/AlouiLouai/chat-app" // Replace with the actual GitHub link to your project
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ecommerce} // Replace with the path to your e-commerce app logo or image
                isBlog={false}
                title="E-Commerce Bookstore"
                description="An e-commerce app for selling books, built with Express (TypeScript with Bun.js and decorators), Next.js 15 App Router, Redux, PostgreSQL, and Vercel Blob for book storage."
                link="https://github.com/AlouiLouai/education-plateform" // Replace with the actual GitHub link to your project
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={reactLogo}
                isBlog={false}
                title="Witout create-react-app"
                description="Since deprecated , I implement a react app from scratch with typescript without runnung the CRA"
                link="https://github.com/AlouiLouai/without-create-react-app-typescript-"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={csgoLogo}
                isBlog={false}
                title="Playing with CS-GO"
                description="tooking a txt file having data from cs-go real party, working with python to get the stats I need . Using the child process of node js to get the data from python"
                link="https://github.com/AlouiLouai/playing-with-CS-GO-dataset"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={dockerLogo}
                isBlog={false}
                title="Docker app"
                description="Playing with express js, postgresql, sequelize and docker to CRUD a user "
                link="https://github.com/AlouiLouai/dockerApp"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hgLogo}
                isBlog={false}
                title="NFT Marketplace"
                description="As OpenSea , but based on the new DLT ( hedera-hashgraph ) "
                link="https://www.hashguild.xyz"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={reduxLogo}
                isBlog={false}
                title="Servless react redux-saga"
                description="Finally done with redux-saga application that had videos reader and photo viewer ."
                link="https://gitlab.com/LouaiAloui/react-redux-saga"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={facebookLogo}
                isBlog={false}
                title="Cool Chrome extension"
                description="A chrome extension that allow you to share one picture or some text in any website by one click to Facebook. A modal with the interface of share photo or text on Facebook."
                link="https://gitlab.com/LouaiAloui/facebooksharecontent"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={downloadImageLogo}
                isBlog={false}
                title="Another cool Chrome extension"
                description="A chrome extension that allow you to download picture in any website by one click."
                link="https://gitlab.com/LouaiAloui/imagedownloader"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </CoreLayout>
  );
}
