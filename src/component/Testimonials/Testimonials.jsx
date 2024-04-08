import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div className="container-fluid p-4">
        <h1>
          <span className="fw-bold"> Customer </span>
          <span className="text-dark">Testimonials</span>
        </h1>
        <p className="text-dark">What others has say About Us</p>
      </div>
      <div className="container">
        <div className="row m-2 d-flex justify-content-space-around">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="tc card">
              <div className="card-body">
                <p className="card-text">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! “
                </p>

                <div>
                  <img src="./images/theressa.png" width="30px" height="30px" />
                </div>
                <div>
                  <h5 className="fs-6">Theresa Webb</h5>
                  <p>HR Manager, Amazon</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="tc card">
              <div className="card-body">
                <p className="card-text">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! ““ Rework has been a great way to make the
                  hiring process easier and faster. Highly recommend! “
                </p>
                <div>
                  <img src="./images/savannah.png" width="30px" height="30px" />
                </div>
                <div>
                  <h5 className="fs-6">Savannah Nguyen</h5>
                  <p>HR Manager, Microsoft</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="tc card">
              <div className="card-body">
                <p className="card-text">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! “
                </p>
                <div>
                  <img src="./images/theressa.png" width="30px" height="30px" />
                </div>
                <div>
                  <h5 className="fs-6">Theresa Webb</h5>
                  <p>HR Manager, Amazon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="tc card">
              <div className="card-body">
                <p className="card-text">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! “
                </p>
                <div>
                  <img src="./images/ronald.png" width="30px" height="30px" />
                </div>
                <div>
                  <h5 className="fs-6">Ronald Richards</h5>
                  <p>HR Manager, Google</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="tc card">
              <div className="card-body">
                <p className="card-text">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! “
                </p>
                <div>
                  <img src="./images/ronald.png" width="30px" height="30px" />
                </div>
                <div>
                  <h5 className="fs-6">Ronald Richards</h5>
                  <p>HR Manager, Google</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="tc card">
              <div className="card-body">
                <p className="card-text">
                  “Rework has been a great way to make the hiring process easier
                  and faster. We've been able to save money and time, and the
                  recruiters have been able to find the best employers leads.
                  Highly recommend! “
                </p>
                <div>
                  <img src="./images/ronald.png" width="30px" height="30px" />
                </div>
                <div>
                  <h5 className="fs-6">Ronald Richards</h5>
                  <p>HR Manager, Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row d-flex justify-content-center py-3 m-auto">
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <div className="card">
            <div className="card-body">
              <h1 className="fs-4">
                How Rework AI has been a good Hiring platform for Companies
              </h1>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <div className="cardt card">
            <div className="card-body">
              <h1>80%</h1>
              <p>
                Reduction in your recruitment TAT with the access to a wider
                talent pool on the platform
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <div className="cardt card">
            <div className="card-body">
              <h1>60%</h1>
              <p>
                Streamline your budgeting and save money while finding the top
                candidates
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-12">
          <div className="card">
            <div className="card-body">
              <h1>10k</h1>
              <p>Certified sourcing partners’ expertise</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
