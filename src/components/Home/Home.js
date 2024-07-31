import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AutoWriter from "./AutoWriter";
import IntroduceHome from "./IntroduceHome";
import homeLogo from "../../Assets/home-main.svg";

export default function Home() {
  return (
    <section>
      <Particle />
      <Container fluid className="home-section" id="Home">        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi! {" "}
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-home"> THANH PHUC</strong>
              </h1>
              <div style={{padding: 50, textAlign: "left" }}>
                <AutoWriter />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>   
      <IntroduceHome />
    </section>
  );
}