import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="row container-fluid ms-auto px-4">
        <Container>
          <Navbar.Brand href="#">
            <img className="logo" src="./images/1.png.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-center fs-5 ms-auto  p-6">
              <Nav.Link href="#">Talent Finder</Nav.Link>
              <Nav.Link href="#">For Recruiters </Nav.Link>
              <Nav.Link href="#">
                <span className="empl">For Employers </span>
              </Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <button className="btn1 btn me-2 px-4 nav-button profile-btn mt-2 ">
                Login
              </button>
              <button className="btn2 btn nav-button px-2 profile-btn sm-me-0 me-2 mt-2 ">
                Get Started
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className=" row container-fluid mt-4 m-0 ">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 m-4">
          <h1>
            <span className="fs-1">Power Up Your Hiring</span> with Rework .
          </h1>
          <p>
            Empower your business with cutting-edge A.I. technology, simplified
            processes, and top-tier talent connections. Rework is your strategic
            partner in redefining how you hire{" "}
          </p>
          <button className="btn2 btn ">Book A Demo</button>
          <br />
          <div>
            <div className="row">
              <div className="col-1">
                <img src="./images/tick.png" width="30px" height="30px" />
              </div>
              <div className="col-5">
                <p>No credit Required</p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <img src="./images/tick.png" width="30px" height="30px" />
              </div>
              <div className="col-5">
                <p>Streamlined Recruitment Process</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 col-sm-12 col-xs-12 col-md-12 col-lg-5 col-xl-5">
          <img
            className="w-100 mt-5 rounded-start-pill"
            src="./images/2.png.png"
            alt="group"
          />
        </div>
      </div>

      <div
        className=" cont-i row container-fluid col-12 col-sm-12 m-0;
"
      >
        <div className="container-fluid text-center my-4">
          <h5>Hire for 1000+ Brands Including</h5>
        </div>
        <div className="row container-fluid mt-3 p-2 pb-5 m-0">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
            <img src="./images/3.png.png" alt="Google" />{" "}
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
            <img src="./images/4.png.png" alt="amazon" />{" "}
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
            <img src="./images/5.png.png" alt="NOKIA" />{" "}
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
            <img src="./images/6.png.png" alt="Spotify" />{" "}
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
            <img src="./images/7.png.png" alt="Microsoft" />{" "}
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 p-4 d-flex justify-content-around">
            <img src="./images/3.png.png" alt="Google" />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
