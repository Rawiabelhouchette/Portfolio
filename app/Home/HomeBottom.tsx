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
              <span className="purple">Full-Stack JavaScript Engineer</span>{" "}
              with expertise in building scalable web applications and services.
              <br />
              <br />I am highly proficient in modern JavaScript frameworks like
              <i>
                <b className="purple">
                  {" "}
                  React, Next.js, Gatsby, Express.js, and Nest.js.{" "}
                </b>
              </i>
              I also have experience working with{" "}
              <b className="purple">Flask</b> for backend development.
              <br />
              <br />
              My skillset extends to <b className="purple">DevOps</b>, where I
              have worked extensively with
              <i>
                <b className="purple">
                  AWS EC2, S3, SES, and SQS, as well as CI/CD pipelines, Bash
                  scripting, and monitoring tools like Loki and Grafana.
                </b>
              </i>
              <br />
              <br />
              Additionally, I gained valuable experience as a{" "}
              <span className="purple">Quantitative Developer</span> while
              working at a hedge fund startup, where I contributed to financial
              solutions leveraging my programming expertise.
              <br />
              <br />
              My goal is to continuously learn, adapt, and apply my skills to
              solve challenging problems and build impactful software.
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
                  href="https://www.facebook.com/profile.php?id=100070654390110"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon icon={faFacebook} />
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
              <li className="social-icons">
                <a
                  href="https://www.gitlab.com/LouaiAloui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon icon={faGitlab} />
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
