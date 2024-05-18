// import React, { useState, useEffect } from "react";
// import pdf from "../assets/mansi.jpg";
// import Button from "react-bootstrap/Button";
// import { Container, Row } from "react-bootstrap";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import Particle from "../components/Particle";
// import tsparticles from "react-tsparticles"
// import {loadfull} from "react-tsparticles"

// pdfjs.GlobalWorkerOptions.workerSrc = //cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js;

// function ResumePage() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (

//  <div className="container mx-auto px-4 py-8">
//   <Particle />
// <section className="resume-section">
//   <div className="justify-center relative">
//     <Button
//         href={pdf}
//         target="_blank"
//         style={{ maxWidth: "250px" }}
//         className=" ml-[45%] bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded inline-flex items-center">
//         <AiOutlineDownload  />
//         &nbsp;Download CV
//       </Button>
//   </div>
//   <div className="resume">
//     <Document file={pdf} className="flex justify-center">
//       <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//     </Document>
//   </div>

//   <div className="justify-center relative">
//     <Button
//       href={pdf}
//       target="_blank"
//       style={{ maxWidth: "250px" }}
//       className="ml-[45%] bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded inline-flex items-center">
//       <AiOutlineDownload  />
//       &nbsp;Download CV
//       </Button>
//   </div>
// </section>
// </div> 
//   );
// }

// export default ResumePage;


import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";
import pdf from "../assets/mansi.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumePage() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumePage;