import React, { useState, useEffect } from 'react';
import MyForm from '../../Data/MyForm';
import logo1 from '../../assist/imgs/img/category_img_02-transformed.png';
import logo2 from '../../assist/imgs/img/banner_img_02-transformed.png';
import logo3 from '../../assist/imgs/img/banner_img_03-transformed.png';

const Home = () => {
  const [name, setName] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const images = [logo1, logo2, logo3];

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    if (name === '') {
      alert('Please Enter Full Name');
    } else {
      alert(`Welcome  ${name}`);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [imageIndex, images.length]);

  return (
    <div className='container-fluid d-flex align-items-center justify-content-center' style={{ height: '90vh' }}>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h1 className="text-left" style={{ color: "#008000" }}>Welcome</h1>
          <h4 className="text-left">This is Zay Market</h4>
          <MyForm
            label="Enter your Full Name"
            buttonText="Go"
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
          <img src={images[imageIndex]} className="img-fluid" alt='..' style={{ maxWidth: '100%', maxHeight: '400px' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
