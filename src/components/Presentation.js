import React from 'react';
import webDevelopper from '../assets/img/web-developper-photo1.png';


const Presentation = () => {
    return (
        <div className="homepage position-relative">
        <img src={webDevelopper} alt="John Doe" className="img-fluid w-100" style={{ maxHeight: '600px', width: '100%' }} />
        <div className="overlay"></div>
        <div className="content text-center position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4 text-white fs-sm-4 fs-md-3 fs-lg-2">John Doe</h1>
          <h2 className="h4 text-white fs-sm6 fs-md-5 fs-lg-4 mb-4">Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary btn-lg">En savoir plus</a>
        </div>
      </div>
    );
};

export default Presentation;