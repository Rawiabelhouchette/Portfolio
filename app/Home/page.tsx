'use client';
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Particle from "../components/Particle";
import TypeWriter from "./TypeWriter";
import HomeBottom from "./HomeBottom";
import TopScroll from "../components/ScrollToTop";

function HomeTop() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <TopScroll />
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I&apos;m
                <strong className="main-name">RAWYA BELHOUCHET</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image src={'/home-main.png'} width={500} height={900}  alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeBottom />
    </section>
  );
}

export default HomeTop;