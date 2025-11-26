// Footer component
import React from 'react';
import { FaFacebook, FaTelegram, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="border_footer"></div>
            <div className='section-footer'>
                <div className="container-footer">
                    <div className="content-footer">
                        <img src="/image/about.png" alt="Mekong Water Solutions Logo" />
                        <p>The Australian Government initiative supporting the planning, development, and management of water resources and water sector systems</p>
                    </div>
                    <div className="information-icon">
                        <a href="#" aria-label="Visit our Facebook page" className='icon-f'>
                            <FaFacebook />
                        </a>
                        <a href="#" aria-label="Join our Telegram channel" className='icon-t'>
                            <FaTelegram />
                        </a>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content-b">
                    <p>© 2022 Mekong Water Solutions. All Rights Reserved.</p>
                    <div className="footer-links">
                        <a href="#" className='f-b1'>Privacy Policy</a>
                        <a href="#" className='f-b2'>Terms and Conditions</a>
                    </div>
                </div>
                <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                    <FaArrowUp />
                </button>
            </footer>
        </>
    );
}

export default Footer;