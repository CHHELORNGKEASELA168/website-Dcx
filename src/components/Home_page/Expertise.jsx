// Expertise component
import "./Style/Expertise.css"
import { FaLongArrowAltRight } from "react-icons/fa";

function Expertise() {
    return (
        <section className="Expertise-content">
            <div className="container-card">
                <div className="hero-section-Expertise">
                    <p>what we do</p>
                    <h1>Our Expertise</h1>
                    <p>We provide, sustainable and inclusive world class services and capabilities in the following areas:</p>
                </div>
                
                <div className="cards-container">
                    <div className="section-card-e">
                        <div className="card-Expertise">
                            <img src="/image/e1.png" alt="Water Resources Management" />
                            <div className="text">
                                <h2>Water Resources Management</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <button>
                                Learn More 
                                <span className="icon-react-e">
                                    <FaLongArrowAltRight />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="section-card-e1">
                        <div className="card-Expertise1">
                            <img src="/image/e2.png" alt="Water Infrastructure" />
                            <div className="text1">
                                <h2>Water Infrastructure</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <button>
                                Learn More 
                                <span className="icon-react-e1">
                                    <FaLongArrowAltRight />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="section-card-e2">
                        <div className="card-Expertise2">
                            <img src="/image/e3.png" alt="Environmental Sustainability" />
                            <div className="text2">
                                <h2>Environmental Sustainability</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <button>
                                Learn More 
                                <span className="icon-react-e2">
                                    <FaLongArrowAltRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>           
        </section>
    );
}

export default Expertise;