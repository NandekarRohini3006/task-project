import Accordion from "react-bootstrap/Accordion";
import "./Questions.css";
const Questions = () => {
  return (
    <>
      <div className="Q">
        <div className="container text-center mt-5">
          <h1>
            <span className="fw-bold"> Frequently asked </span> Questions{" "}
          </h1>
          <p className="text-dark">
            We have Compiled the most commonly asked question about our Platform
            for your information and
            <br /> to enhance your overall experience.
          </p>
        </div>
        <div className="que">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <h4>How can I Get started with Rework AI?</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
                  feugiat tortor odio. Scelerisque habitant quam pharetra
                  adipiscing id ipsum et lectus malesuada.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default Questions;
