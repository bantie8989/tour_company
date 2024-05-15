import Footer from "../../homepage/components/footerComponent/Footer";
import Topbar from "../../homepage/components/topbarComponent/Topbar";
import "./about.css";
import ContactForms from "./contactFormComponent/ContactForms";
import EmailSubscription from "./emailComponet/Email";
function About() {
  return (
    <div className="about-us-container">
      <Topbar className="topbar" />
      <ContactForms className="contact-forms" />
      <EmailSubscription className="email-subscription" />

      <Footer className="footer" />
    </div>
  );
}

export default About;
