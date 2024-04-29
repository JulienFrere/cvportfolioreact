import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../style/footerstyle.scss';


const Footer = () => {
  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* 1re colonne */}
          <div className="col-md-3">
            <h5>John Doe</h5>
            <p>Adresse: 123 Rue de l'Exemple, Ville</p>
            <p>Téléphone: 123-456-7890</p>
            <div>
              {/* Icônes des réseaux professionnels */}
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          {/* 2e colonne */}
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">A Propos</a></li>
              <li><a href="/service">Services</a></li>
              <li><a href="/contact">Me Contacter</a></li>
              <li><a href="/mentions">Mentions Légales</a></li>
              {/* Exclure les liens vers les réalisations et les articles de blog */}
            </ul>
          </div>
          {/* 3e colonne */}
          <div className="col-md-3">
            <h5>Dernières réalisations</h5>
            {/* Ajouter des liens vers les dernières réalisations */}
          </div>
          {/* 4e colonne */}
          <div className="col-md-3">
            <h5>Derniers articles de blog</h5>
            {/* Ajouter des liens vers les derniers articles de blog */}
          </div>
        </div>
      </div>
      <div className="scroll-to-top">
        <a href="#" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </a>
      {/* Ligne de copyright */}
      <div className="copyright text-center py-3 border border-dark bg-black">
        <p>&copy; 2024 John Doe. Tous droits réservés.</p>
      </div>
      {/* Lien pour remonter en haut de la page */}
      </div>
    </footer>
  );
};
export default Footer;