import "./contactInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
return (
    <div className="contact-info-container">
    <div className="contact-info">
        <h2 className="contact-info__title">Contact Information</h2>
        <ul className="contact-info__list">
            <li className="contact-info__item">
                <FontAwesomeIcon icon={faPhone} />
                <span className="contact-info__text">+1 (123) 456-7890</span>
            </li>
            <li className="contact-info__item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="contact-info__text">info@tourismcompany.com</span>
            </li>
            <li className="contact-info__item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="contact-info__text">1234 Main St, Anytown, USA</span>
            </li>
        </ul>
    </div>
    </div>
);
};
export default ContactInfo;