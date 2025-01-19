import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container-creative">
            <h1 className="contact-heading-creative">We'd Love to Hear From You!</h1>
            <p className="contact-subheading-creative">Get in touch with us using the following contact details or find us on the map below:</p>

            <div className="contact-info-creative">
                <div className="contact-card">
                    <img 
                        src="https://img.icons8.com/ios/100/000000/address.png" 
                        alt="Address Icon" 
                        className="contact-icon-creative" 
                    />
                    <div className="contact-card-content">
                        <h3>Our Address</h3>
                        <p>123 Main Street, City, Country</p>
                    </div>
                </div>

                <div className="contact-card">
                    <img 
                        src="https://img.icons8.com/ios/100/000000/phone.png" 
                        alt="Phone Icon" 
                        className="contact-icon-creative" 
                    />
                    <div className="contact-card-content">
                        <h3>Call Us</h3>
                        <p>+1 234 567 890</p>
                    </div>
                </div>

                <div className="contact-card">
                    <img 
                        src="https://img.icons8.com/ios/100/000000/email.png" 
                        alt="Email Icon" 
                        className="contact-icon-creative" 
                    />
                    <div className="contact-card-content">
                        <h3>Email Us</h3>
                        <p>contact@example.com</p>
                    </div>
                </div>
            </div>

            <div className="map-section">
                <h3>Find Us on the Map</h3>
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.292541137416!2d-0.13011638464355944!3d51.507451079647035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f3c891c38b9%3A0xc8c828c7b8e9d643!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1619178831442!5m2!1sen!2suk" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>

            
            <div className="social-media-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://img.icons8.com/ios/100/000000/facebook.png" 
                            alt="Facebook Icon" 
                            className="social-icon" 
                        />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://img.icons8.com/ios/100/000000/twitter.png" 
                            alt="Twitter Icon" 
                            className="social-icon" 
                        />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://img.icons8.com/ios/100/000000/instagram-new.png" 
                            alt="Instagram Icon" 
                            className="social-icon" 
                        />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://img.icons8.com/ios/100/000000/linkedin.png" 
                            alt="LinkedIn Icon" 
                            className="social-icon" 
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
