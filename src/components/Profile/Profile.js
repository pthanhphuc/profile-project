import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";

export default function Profile() {
  return (
    <div>
      <Container fluid className="profile-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>

          <Row className="profile">
            <h1>This is cv(TODO)</h1>
          </Row>
          <Button
            variant="primary"
            href="#"
            target="_blank"
            style={{ maxWidth: "250px" }}>
              <AiOutlineDownload />
              &nbsp;Download CV
          </Button>
        </Row>
        
      </Container>
    </div>
  )
}