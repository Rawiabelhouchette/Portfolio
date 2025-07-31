import React from 'react';
import { Col } from 'react-bootstrap';

interface TechstackProps {
  iconName: string;
}

const Techstack: React.FC<TechstackProps> = ({ iconName }) => {
  const iconClass = `${iconName} tech-icon-images`;

  return (
    <Col xs={4} md={2} className="tech-icons">
      <i className={iconClass}></i>
    </Col>
  );
};

export default Techstack;
