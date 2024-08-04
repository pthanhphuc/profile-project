import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import MyCVPdf from "../../Assets/CV/CV_Phan_Thanh_Phuc.pdf";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Profile() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="profile-section">
        <Particle />
        <Row className="profile">
          <Document file={MyCVPdf} className="d-flex justify-content-center">
            <Page size="A4" pageNumber={1} renderTextLayer={false} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={MyCVPdf}
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