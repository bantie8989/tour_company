import './googlemap.css';

function Googlemap() {
  return (
    <div className="google-map">
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.2599793622317!2d38.759879073915165!3d9.040032991021727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDInMjQuMSJOIDM4wrA0NSc0NC44IkU!5e0!3m2!1sen!2set!4v1715534884039!5m2!1sen!2set"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
export default Googlemap;


