import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/Banner";
import "../style/Service.scss";

const Service = () => {
  const [isHovered, setIsHovered] = useState([false, false, false]);

  const handleMouseEnter = (index) => {
    const updatedStates = isHovered.map((state, i) => (i === index ? true : state));
    setIsHovered(updatedStates);
  };

  const handleMouseLeave = (index) => {
    const updatedStates = isHovered.map((state, i) => (i === index ? false : state));
    setIsHovered(updatedStates);
  };

  return (
    <div>
      <Navigation />
      <Banner />
      <div className="container mt-5">
        <h2 className="portfolio-title text-center mb-2">MON OFFRE DE SERVICE</h2>
        <p className="text-center mb-1">Voici les prestations sur lesquelles je peux intervenir.</p>
        <div className="subtitle mx-auto mb-5"></div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="h-100 border-0 shadow" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
              <Card.Body className="text-center d-flex flex-column justify-content-center" style={{ marginBottom: "50px" }}>
                <FontAwesomeIcon icon={faDesktop} size="3x" className="mb-3" style={{ color: isHovered[0] ? " #cde1f8" : "#0d6efd", transition: "color 0.3s ease" }} />
                <Card.Title style={{ color: "#444", textTransform: "uppercase" }}>UX Design</Card.Title>
                <Card.Text>
                  <strong>L'UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100 border-0 shadow" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
              <Card.Body className="text-center d-flex flex-column justify-content-center" style={{ marginBottom: "50px" }}>
                <FontAwesomeIcon icon={faCode} size="3x" className="mb-3" style={{ color: isHovered[1] ? " #cde1f8" : "#0d6efd", transition: "color 0.3s ease" }} />
                <Card.Title style={{ color: "#444", textTransform: "uppercase" }}>Développement Web</Card.Title>
                <Card.Text>
                  Le <strong>développement de sites web </strong> repose sur l'utilisation des languages HTML, CSS, JavaScript et PHP.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card className="h-100 border-0 shadow" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
              <Card.Body className="text-center d-flex flex-column justify-content-center" style={{ marginBottom: "50px" }}>
                <FontAwesomeIcon icon={faSearchDollar} size="3x" className="mb-3" style={{ color: isHovered[2] ? " #cde1f8" : "#0d6efd", transition: "color 0.3s ease" }} />
                <Card.Title style={{ color: "#444", textTransform: "uppercase" }}>Référencement</Card.Title>
                <Card.Text>
                  Le <strong>référencement naturel d'un site,</strong> aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <em>améliorer sa position</em> dans les
                  résultats des moteurs de recherche.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
