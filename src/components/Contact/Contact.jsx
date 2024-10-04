import deppMe from '../../assets/deppMe.jpg'; 
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      
       
        
        <div className="social-icons">
          <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
          <a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
          <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
          <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
        </div>
      

      <main className="contact-main">
        <div className="contact-left">
          <h1>contact.</h1>
          <p>Get in touch with me via social media or email.</p>
          <div className="social-links">
            <a href="https://twitter.com" className="twitter">
              <i className="fa fa-twitter"></i> Twitter
            </a>
            <a href="https://facebook.com" className="facebook">
              <i className="fa fa-facebook"></i> Facebook
            </a>
            <a href="https://linkedin.com" className="linkedin">
              <i className="fa fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://instagram.com" className="instagram">
              <i className="fa fa-instagram"></i> Instagram
            </a>
          </div>
        </div>

        <div className="contact-right">
        <img src={deppMe} alt="Profile" />

        </div>
      </main>
    </div>
  );
};

export default Contact;
