function Services() {
  const services = [
    {
      icone: "bi-pencil",
      titre: "UX Design",
      description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
    },
    {
      icone: "bi-code-slash",
      titre: "Développement web",
      description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
    },
    {
      icone: "bi-search",
      titre: "Référencement",
      description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
    }
  ];

  return (
    <div>
      <div className="bg-primary" style={{ height: '200px' }}></div>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1>Mon offre de services</h1>
          <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 service-card text-center">
                <div className="card-body">
                  <i className={`bi ${service.icone} text-primary fs-1 mb-3`}></i>
                 <h4 className="card-title h5">{service.titre}</h4>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;