import freshFoodImg from '../assets/fresh-food.jpg';
import restaurantImg from '../assets/restaurant-japonais.jpg';
import bienEtreImg from '../assets/espace-bien-etre.jpg';
import seoImg from '../assets/seo.jpg';
import apiImg from '../assets/coder.jpg';
import maquetteImg from '../assets/screens.jpg';

function Portfolio() {
  const projets = [
    { image: freshFoodImg, titre: "Fresh Food", description: "Site de vente de produits frais en ligne", technique: "Site réalisé avec PHP et MySQL" },
    { image: restaurantImg, titre: "Restaurant Akira", description: "Site de vente de produits frais en ligne", technique: "Site réalisé avec WordPress" },
    { image: bienEtreImg, titre: "Espace bien-être", description: "Site de vente de produits frais en ligne", technique: "Site réalisé avec LARAVEL" },
    { image: seoImg, titre: "SEO", description: "Amélioration du référencement d'un site e-commerce", technique: "Utilisation des outils SEO" },
    { image: apiImg, titre: "Création d'une API", description: "Création d'une API RESTFULL publique", technique: "PHP - SYMFONY" },
    { image: maquetteImg, titre: "Maquette d'un site web", description: "Création du prototype d'un site", technique: "Réalisé avec FIGMA" }
  ];

  return (
    <div>
      <div className="bg-primary" style={{ height: '200px' }}></div>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1>Portfolio</h1>
          <p className="text-muted">Voici quelques-unes de mes réalisations</p>
        </div>

        <div className="row g-4">
          {projets.map((projet, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 service-card">
                <img
                  src={projet.image}
                  className="card-img-top"
                  alt={projet.titre}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h2 className="card-title h5">{projet.titre}</h2>
                  <p className="card-text">{projet.description}</p>
                  <button className="btn btn-primary portfolio-btn mt-2">
                    Voir le site
                  </button>
                  <p className="text-muted small mt-2 mb-0">{projet.technique}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;