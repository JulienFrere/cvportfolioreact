import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card, Button } from "react-bootstrap";
import "../style/blog.scss";
import codageHtml from "../assets/img/codageHtml.png";
import eCommerce from "../assets/img/eCommerce.png";

const Blog = () => {
  // Tableau des titres et des descriptions des articles
  const articles = [
    {
      title: "Coder son site en HTML/CSS",
      description: "Description de l'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "22 août 2022",
      image: codageHtml,
    },
    {
      title: "Vendre ses produits sur le web",
      description: "Description de l'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "20 août 2022",
      image: eCommerce,
    },
    {
      title: "Se positionner sur Google",
      description: "Description de l'article 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "1 août 2022",
    },
    {
      title: "Coder en responsive web design",
      description: "Description de l'article 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "31 juillet 2022",
    },
    {
      title: "Technique de référencement",
      description: "Description de l'article 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "30 juillet 2022",
    },
    {
      title: "Apprendre à coder",
      description: "Description de l'article 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "12 juillet 2022",
    },
  ];

  return (
    <div>
      <Navigation />
      {/* Ajouter un peu d'espace au-dessus des cartes */}
      <div className="container mt-5">
        <h2 className="portfolio-title">Mon Blog</h2>
        <p className="subtitle">Voici quelques articles récents.</p>
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Card className="h-100">
                {/* Utiliser la classe "h-100" pour rendre les cartes de hauteur égale */}
                <Card.Img variant="top" src={article.image} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Button variant="primary">Lire la suite</Button>
                  <p className="mt-3">Publié le {article.date}</p>
                </Card.Body>
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
