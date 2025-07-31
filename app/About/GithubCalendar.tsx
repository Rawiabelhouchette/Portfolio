"use client";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Col, Form, Row } from "react-bootstrap";

const years = [2022, 2023, 2024, 2025];

function Github() {
  const [selectedYear, setSelectedYear] = useState(2025);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col xs={12} className="d-flex flex-column align-items-center mb-4">
        <h1
          className="project-heading text-center"
          style={{ paddingBottom: "10px" }}
        >
          Days I <strong className="purple">Code</strong> during
        </h1>
        <Form.Group controlId="yearSelect">
          <Form.Control
            as="select"
            value={selectedYear}
            onChange={handleYearChange}
            style={{
              width: "120px",
              color: "#6c63ff", // Matches the color of "I Code"
              border: "2px solid #6c63ff",
              backgroundColor: "#f9f9ff",
              textAlign: "center",
            }}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col xs={12}>
        <GitHubCalendar
          username="belhouchetrawya"
          year={selectedYear}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </Col>
    </Row>
  );
}

export default Github;
