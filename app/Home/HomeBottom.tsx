import { Container, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

function HomeBottom() {
  const myImg = "/avatara.png";

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate{" "}
              <span className="purple">Full-Stack Developer</span>{" "}
              with expertise in building robust and scalable web and mobile applications
              <br />
              <br />I am highly proficient in modern frontend technologies like
              <i>
                <b className="purple">
                  {" "}
                  Angular and React Native.{" "}
                </b>
              </i>
              combined  with powerful backend frameworks such as{" "}
              <b className="purple">Java and Spring Boot</b>
              <br />
              <br />
              I thrive in fast-paced, multicultural environments and stand out for my ability to learn quickly, adapt effectively, and tackle complex challenges.
              <br />
              <br />
              I am currently exploring {" "}
              <span className="purple">intelligent systems and integrating AI into real-world applications</span>, while strengthening my expertise in software architecture and application performance.
              <br />
              <br />
              My goal is to actively contribute to innovative, user-centered projects and grow within dynamic technical teams.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Image src={myImg} width={300} height={300} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rawiabelhouchette"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/belhouchette-rawya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeBottom;
