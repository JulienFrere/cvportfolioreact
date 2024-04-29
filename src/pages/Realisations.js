import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../style/Realisationstyle.scss';
import { Card, Button } from 'react-bootstrap';
import natureMountains from '../assets/img/nature-montains.jpg';
import roadChina from '../assets/img/road-china.png';
import GreenTurtleSea from '../assets/img/green-sea-turtle.png';

const Realisations = () => {
  return (
      <div>
          <Navigation />
          <div className="container mt-5"> {/* Ajouter un peu d'espace au-dessus des cartes */}
          <h2 className="portfolio-title"> PORTFOLIO</h2>
          <p className="subtitle">Voici quelques unes de mes réalisations.</p>
              <div className="row">
                  <div className="col-md-4 mb-4">
                      <Card className="h-100"> {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                          <Card.Img variant="top" src={roadChina} alt="Road China"/>
                          <Card.Body>
                              <Card.Title>Projet 1</Card.Title>
                              <Button variant="primary">Voir plus</Button>
                          </Card.Body>
                      </Card>
                  </div>
                  <div className="col-md-4 mb-4">
                      <Card className="h-100"> {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                          <Card.Img variant="top" src={natureMountains} alt="Nature Mountains" />
                          <Card.Body>
                              <Card.Title>Projet 2</Card.Title>
                              <Button variant="primary">Voir plus</Button>
                          </Card.Body>
                      </Card>
                  </div>
                  <div className="col-md-4 mb-4">
                      <Card className="h-100"> {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                          <Card.Img variant="top" src={GreenTurtleSea} alt="Green Turtle Sea"/>
                          <Card.Body>
                              <Card.Title>Projet 3</Card.Title>
                              <Button variant="primary">Voir plus</Button>
                          </Card.Body>
                      </Card>
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default Realisations;