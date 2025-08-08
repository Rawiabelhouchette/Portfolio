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

import vamiyiLogo from "../../public/projects/vamiyi.png"; // image symbolisant consulting et RH
import cosmeticShopLogo from "../../public/projects/cosmo.png"; // icône de cosmétique + mobile
import financeTrackerLogo from "../../public/projects/finance.png"; // icône finance / budget
import vnetworkLogo from "../../public/projects/network.png"; // icône social network
import vnetworkBackendLogo from "../../public/projects/bakend.png"; // icône backend / serveur
import b2bManagerLogo from "../../public/projects/manager.png"; // icône gestion produits / B2B


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
                imgPath={vamiyiLogo} // Replace with the path to your chat app logo or image
                isBlog={false}
                title="VAMIYI"
                description="Personal Development & HR Consulting Platform built with React.js (Vite), Tailwind CSS, React Router, EmailJS, i18n, Node.js, Express.js, and MongoDB."
                link="https://github.com/Rawiabelhouchette/vamiyi-main.git" // Replace with the actual GitHub link to your project
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={cosmeticShopLogo} // Replace with the path to your e-commerce app logo or image
                isBlog={false}
                title="Cosmetic Shop - Android Application"
                description="Cosmetic Shop is a modern Android e-commerce app for cosmetics, built with Java, Firebase (Realtime DB, Auth, Analytics), Google Maps API, Dexter, and Material Design."
                link="https://github.com/Rawiabelhouchette/Preject_android.git" // Replace with the actual GitHub link to your project
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={financeTrackerLogo}
                isBlog={false}
                title="Personal Finance Tracker"
                description="Finance Manager is a cross-platform mobile app built with React Native, Expo, React Navigation, AsyncStorage, and Lottie, designed to track income, expenses, and financial goals."
                link="https://github.com/Rawiabelhouchette/ProjectReactNative.git"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={vnetworkLogo}
                isBlog={false}
                title="V-Network"
                description="V-Network is a full-stack social media application built with the MERN stack, featuring real-time communication via Socket.io and WebRTC, with authentication, state management, and peer-to-peer connectivity."
                link="https://github.com/Rawiabelhouchette/v-network-main.git"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={vnetworkBackendLogo}
                isBlog={false}
                title="V-Network Backend"
                description="Backend for a social networking mobile app (V-Network), providing a RESTful API for user authentication, posts, likes, comments, messaging, and user relationships, built with Node.js, Express, and MongoDB."
                link="https://github.com/Rawiabelhouchette/socail-media-backend.git"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={b2bManagerLogo}
                isBlog={false}
                title="Smart B2B Manager – Laravel App for Products, Partners & Requests"
                description="Full-stack web application for managing products, partners, and requests, built with Laravel 11, Jetstream, Livewire, Tailwind CSS, and MySQL; includes user authentication and role-based authorization."
                link="https://github.com/Rawiabelhouchette/ecoplast.git"
              />
            </Col>
            
          </Row>
        </Container>
      </Container>
    </CoreLayout>
  );
}
