import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutIntroduce() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blogquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thanh Phuc </span>
            from<span className="purple"> Binh Dinh, Viet Nam.</span>
            <br />
            I am currently working as a software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172" }}>
            "Change your habits and it will change your life!"
          </p>
          <footer className="blockquote-footer">Thanh Phuc</footer>
        </blogquote>
      </Card.Body>
    </Card>
  );
}