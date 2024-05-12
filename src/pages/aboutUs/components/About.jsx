import Footer from "../../homepage/components/footerComponent/Footer";
import Topbar from "../../homepage/components/topbarComponent/Topbar";
import "./about.css";
import ContactForms from "./contactFormComponent/ContactForms";
import EmailSubscription from "./emailComponet/Email";
function About() {
  return (
    <div>
      <Topbar />
      <ContactForms />
      <EmailSubscription />
      {/* <Googlemap/> */}

      <Footer />
      {/* <SocialMedia/> */}
      {/* <Testimonial/> */}
      {/* <Privacy/> */}
      {/* <Term/> */}
      {/* <LiveChat/> */}
    </div>
  );
}

export default About;
