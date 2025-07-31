"use client";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ChooseCards({ title, description, previewLink }: any) {
  const [showPreview, setShowPreview] = useState(false);

  // Toggle the modal visibility
  const handlePreviewClick = () => {
    setShowPreview(!showPreview);
  };

  // Close the modal when clicked outside
  const handleModalClose = () => {
    setShowPreview(false);
  };

  return (
    <>
      <Card className="project-card-view">
        <div className="button-overlay">
          <Button
            variant="primary"
            onClick={handlePreviewClick}
            style={{
              backgroundColor: "#a588c0",
              borderColor: "#a588c0",
              color: "#fff",
            }}
          >
            Preview
          </Button>
        </div>
        <iframe
          src={previewLink}
          className="pdf-preview"
          title={`${title} Preview`}
        ></iframe>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Modal for Full-Screen Preview */}
      <Modal
        show={showPreview}
        onHide={handleModalClose}
        size="xl"
        centered
        fullscreen
        animation={false}
        backdrop="static" // Prevent closing when clicking outside, but handle onHide manually
        className="custom-modal" // Add custom class to modal
      >
        <Button
          variant="secondary"
          onClick={handleModalClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1050,
            backgroundColor: "#a588c0",
            borderColor: "#a588c0",
            color: "#fff",
          }}
        >
          Close
        </Button>
        <Modal.Body>
          <iframe
            src={previewLink}
            style={{
              width: "100%",
              height: "100vh",
              border: "none",
            }}
            title={`${title} Full Preview`}
          ></iframe>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        /* Custom Modal Border */
        .custom-modal .modal-content {
          border: 2px solid #a588c0 !important; /* Change the border color here */
        }

        .button-overlay {
          position: absolute; /* Ensure overlay positioning */
          top: 0;
          left: 0;
          width: 100%; /* Cover the entire card */
          height: 100%; /* Cover the entire card */
          display: flex; /* Use Flexbox for centering */
          justify-content: center; /* Center horizontally */
          align-items: center; /* Center vertically */
          background-color: rgba(
            0,
            0,
            0,
            0.3
          ); /* Optional: Transparent overlay background */
        }

        .image-wrapper {
          position: relative;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f8f9fa;
        }

        .flag-icon {
          width: 60px;
          height: auto;
        }

        .pdf-preview {
          width: 100%;
          height: 500px;
          border: none;
        }
      `}</style>
    </>
  );
}
