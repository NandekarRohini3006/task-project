import "./System.css";

const System = () => {
  return (
    <>
      <section className="sc py-5">
        <div className="container ">
          <div className="text-center my-5">
            <h1 className="">How Our System Operates</h1>
          </div>
          <div className="row py-4 d-flex justify-content-center ">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="cardb py-2 card d-flex ">
                <div className="card-body">
                  <div className=" d-flex justify-content-center">
                    <h5 className="me-1 card-title fw-bold">
                      Upload Documents
                    </h5>
                    <img className="justify" src="./images/cc1.png.png" />
                  </div>
                  <p className="card-text">
                    Shortlist the most qualified candidate and upload their
                    details for the top companies
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div id="card2" className="cardb card d-flex ">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Sign Up</h5>
                  <p className="card-text">
                    Follow the link below to sign up and get access of the
                    current job postings
                  </p>
                  <img src="./images/cc2.png.png" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="cardb card d-flex">
                <div className="card-body">
                  <div className=" d-flex justify-content-center">
                    <h5 className="card-title fw-bold">Get Rewards</h5>
                    <img src="./images/cc3.png.png" />
                  </div>
                  <p className="card-text">
                    As soon as the candidate gets selected you get your benefits
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="d-flex justify-content-center btn1 btn">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};
export default System;
