import "./Benefits.css";

const Benefits = () => {
  return (
    <>
      <div className="row container-fluid bg-white m-0">
        <div className="col-12 d-flex justify-content-evenly mt-5 pt-2">
          <h1 className="sm-fs-6">
            Our Amazing Benefits Helpful For Your Hiring
          </h1>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="cm card">
              <div className="card-body">
                <img src="./images/c1.png.png" />
                <h5 className="ct card-title">60% Cost Reduce</h5>
                <p className="card-text">
                  Zero overhead in the hiring process - promise! Source top
                  quality candidates for some of the best companies
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="cm card">
              <div className="card-body">
                <img src="./images/c2.png.png" />
                <h5 className="ct card-title">50% Faster Recruitment by TAT</h5>
                <p className="card-text">
                  Zero overhead in the hiring process - promise! Source top
                  quality candidates for some of the best companies
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="cm card">
              <div className="card-body">
                <img src="./images/c3.png.png" />
                <h5 className="ct card-title">
                  Highly Contextualized Interview
                </h5>
                <p className="card-text">
                  Al models generate highly contextualized interviews for the
                  candidates based on your Company profile, Job description and
                  Candidate's CV.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="cm card">
              <div className="card-body">
                <img src="./images/c4.png.png" />
                <h5 className="ct card-title">Automated Scheduling</h5>
                <p className="card-text">
                  Email & WhatsApp based communication for interview scheduling
                  with automated reminders.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="cm card">
              <div class="card-body">
                <img src="./images/c5.png.png" />
                <h5 class="ct card-title">
                  AI generated Interviews On what matters
                </h5>
                <p class="card-text">
                  0 manual interventions, completely seamless experience for the
                  candidates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div class="cm card">
              <div class="card-body ">
                <img src="./images/c6.png.png" />
                <h5 class="ct card-title">in-built ATS</h5>
                <p class="card-text">
                  To manage all of your candidates & Credo verified CVs.
                  Integrations with other ATS coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Benefits;
