// ContactSection component
import "./Style/Contact.css"

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted");
    };

    return (
        <div className="container-content-contact">
            <div className="contact-section">
                <div className="contact-form">
                    <h2>Let us know how we can help you</h2>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="fullname">Full Name</label>
                        <input 
                            type="text" 
                            id="fullname"
                            placeholder="Enter your name" 
                        />

                        <label htmlFor="email">Email Address *</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Enter your email" 
                            required 
                        />

                        <label htmlFor="message">Message *</label>
                        <textarea 
                            id="message"
                            placeholder="Write your message..." 
                            rows="5"
                            required
                        ></textarea>

                        <button type="submit" className="btn-contact-c">
                            Send Now <span className="arrow">→</span>
                        </button>
                    </form>
                </div>

                <div className="map-container">
                    <iframe
                        title="Google Map - Mekong Water Solutions Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.497799694641!2d104.9238159746066!3d11.55883158864698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513a49361eb7%3A0xf0e8f4f0e2d64d70!2z4YCU4YC44YCt4YCZ4YC84YCl4YC84YCe4YC44YCU4YC64YCs4YCc4YC84YCs4YCK4YC64YCs4YCf4YCs4YCA4YC54YCc4YC64YCA4YCv4YCB4YC64YCQ!5e0!3m2!1sen!2skh!4v1694678202410!5m2!1sen!2skh"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;