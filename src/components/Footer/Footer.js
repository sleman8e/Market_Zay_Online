import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ selectedColor }) => {
    const footerStyle = {
        backgroundColor: selectedColor// default color is white if no color selected
    };

    return (
        <div>
            <footer className="text-lg-start fixed-bottom" style={footerStyle}>
                <div className="container">
                    <div className="p-3 d-flex flex-column flex-lg-row justify-content-between align-items-center">
                        <p style={{ color: 'black', fontSize: "15px" }}>© 2024 Copyright: build by <span
                            style={{ color: "green" }}>Sleman Qtawe</span></p>
                        <div className="d-flex justify-content-center justify-content-lg-end">
                            <a href="https://github.com/sleman8e" target="_blank" rel="noopener noreferrer"
                                className="text-success me-lg-3"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/sleman-qtawe-14a5082ab/" target="_blank"
                                rel="noopener noreferrer" className="text-success"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;




