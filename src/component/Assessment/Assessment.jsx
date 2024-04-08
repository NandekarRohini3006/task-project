import "./Assessment.css";

const Assessment = () => {
  return (
    <>
      <div className="assc container-fluid py-5">
        <div className="row m-auto">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <h1>
              <span className="fw-bold p-2">Discover the Future of </span>{" "}
              Talent Assessment!
            </h1>
            <p className="p-3 text-dark">
              Facing challenges in traditional hiring? Uncover the costs,
              pitfalls, and the game-changing role of Generative AI in
              recruitment.
            </p>
            <p className="p-3 text-dark">
              🔍 Inside this Whitepaper: <br />
              . Manual vs. Machine-based hiring: Costs & Challenges.
              <br />. The truth about "Interview as a Service."
              <br />. Generative AI: The simple explanation. Optimize Your
              Hiring Process Today!
            </p>
            <button className="btn btn2">
              Download Now for Smarter Recruitment
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <img
              className="p-3 ms-5"
              src="./images/handbook.png"
              width="300px"
              height="400px"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Assessment;
