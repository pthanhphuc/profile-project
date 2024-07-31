import  { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact
} from "react-icons/di";
import {
  SiCsharp,
  SiPostgresql,
  SiVuedotjs
} from "react-icons/si";

export default function Techstack() {
  return (
    <Row style={{ justify: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
    </Row>

  );
}