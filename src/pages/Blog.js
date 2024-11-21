import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, Button } from "react-bootstrap";
import "../style/blog.scss";
import Banner from "../components/Banner";
import codageHtml from "../assets/img/coder.jpg";
import eCommerce from "../assets/img/croissance.jpg";
import googleSearch from "../assets/img/google.jpg";
import technology from "../assets/img/screens.jpg";
import seoPhoto from "../assets/img/seo.jpg";
import learningCode from "../assets/img/technos.png";

const Blog = () => {
  // Tableau des titres et des descriptions des articles
  const articles = [
    {
      title: "Coder son site en HTML/CSS",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "22 août 2022",
      image: codageHtml,
    },
    {
      title: "Vendre ses produits sur le web",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "20 août 2022",
      image: eCommerce,
    },
    {
      title: "Se positionner sur Google",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "1 août 2022",
      image: googleSearch,
    },
    {
      title: "Coder en responsive web design",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "31 juillet 2022",
      image: technology,
    },
    {
      title: "Technique de référencement",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "30 juillet 2022",
      image: seoPhoto,
    },
    {
      title: "Apprendre à coder",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      date: "12 juillet 2022",
      image: learningCode,
    },
  ];

  return (
    <div>
      <Navigation />
      <Banner />
      <div className="container mt-5 custom-blog">
        <h2 className="portfolio-title">Mon Blog</h2>
        <p className="subtitle">Retrouvez ici quelques articles sur le développement web</p>
        <div className="row blog">
          {articles.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Card className="h-100">
                {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                <Card.Img variant="top" src={article.image} className="card-img-top" />
                <Card.Body>
                  <Card.Title className="cardTitle">{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Button variant="primary">Lire la suite</Button>
                </Card.Body>
                <Card.Footer>Publié le {article.date}</Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Blog;
