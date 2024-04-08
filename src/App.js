import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/Navigation/Navigation";
import Benefits from "./component/Benefits/Benefits";
import System from "./component/System/System";
import Pricing from "./component/Pricing/Pricing";
import Assessment from "./component/Assessment/Assessment";
import Testimonials from "./component/Testimonials/Testimonials";
import Success from "./component/Success/Success";
import Questions from "./component/Questions/Questions";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Benefits></Benefits>
      <System />
      <Pricing></Pricing>
      <Assessment></Assessment>
      <Testimonials></Testimonials>
      <Success></Success>
      <Questions></Questions>
      <Footer></Footer>
    </>
  );
}

export default App;
