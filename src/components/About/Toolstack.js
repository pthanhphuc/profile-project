import { Row, Col } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMicrosoftsqlserver,
  SiGithub
} from "react-icons/si";

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
    </Row>
  )
}