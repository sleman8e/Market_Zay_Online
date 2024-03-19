import React, { useState, useEffect } from "react";
import './About.css';
import logo1 from '../../assist/imgs/img/brand_01.png';
import logo2 from '../../assist/imgs/img/brand_02.png';
import logo3 from '../../assist/imgs/img/brand_03.png';
import logo4 from '../../assist/imgs/img/brand_04.png';
import Footer from "../Footer/Footer";

const About = () => {
    const colors = ["white", "whitesmoke"];
    const [selectedColor, setSelectedColor] = useState('');
    const [imageIndex, setImageIndex] = useState(0);
    const images = [logo1, logo2, logo3, logo4];

    const handleColorChange = (event) => {
        const color = event.target.value;
        setSelectedColor(color);
        document.body.style.backgroundColor = color;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearTimeout(timer);
    }, [imageIndex, images.length]);

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ height: '70vh' }}>
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src={images[imageIndex]} alt="Profile" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <div className="text-left">
                        <h2>Hi, I'm Sleman Qtawe</h2>
                        <p>Software Engineering</p>
                        <select className="form-select mb-3" onChange={handleColorChange} value={selectedColor}>
                            <option value="">Change background Color</option>
                            {colors.map(color => (
                                <option key={color} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <Footer selectedColor={selectedColor} />
        </div>
    );
};

export default About;

