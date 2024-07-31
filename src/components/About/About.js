
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutIntroduce from "./AboutIntroduce";
import laptopImg from "../../Assets/about.png";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

export default function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
                Hi!
              </h1>
              <AboutIntroduce />
          </Col>
          <Col 
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "5-px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">Skillset</h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}