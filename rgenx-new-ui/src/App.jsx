import "./index.css";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import LandingPage from "./Components/LandingPage";
import Germline from "./Components/Germline";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import HowToUse from "./Components/HowToUse";
import PatientInformationForm from "./Components/PatientInformationForm";

function App() {
  return (
    <>
      <LoginForm></LoginForm>
      <SignupForm></SignupForm>
      <LandingPage></LandingPage>
      <Germline></Germline>
      <PrivacyPolicy></PrivacyPolicy>
      <HowToUse></HowToUse>
      <PatientInformationForm></PatientInformationForm>
    </>
  );
}

export default App;
