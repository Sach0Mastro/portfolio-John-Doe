import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire :', formData);
    setEnvoye(true);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1>Contact</h1>
        <p className="text-muted">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
      </div>

      <div className="row g-5">

        <div className="col-md-6">
          <h5 className="border-bottom border-primary pb-2 d-inline-block mb-4">Formulaire de contact</h5>

          {envoye ? (
            <div className="alert alert-success">
              Merci, votre message a bien été envoyé !
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="nom"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Votre adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="telephone"
                  placeholder="Votre numéro de téléphone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="sujet"
                  placeholder="Sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary portfolio-btn">
                Envoyer
              </button>
            </form>
          )}
        </div>

        <div className="col-md-6">
          <h5 className="border-bottom border-primary pb-2 d-inline-block mb-4">Mes coordonnées</h5>

          <p className="fw-bold mb-1">John Doe</p>
          <p><i className="bi bi-geo-alt me-2"></i>40 rue Laure Diebold</p>
          <p><i className="bi bi-geo-alt me-2 invisible"></i>69009 Lyon, France</p>
          <p><i className="bi bi-telephone me-2"></i>10 20 30 40 50</p>
          <p><i className="bi bi-envelope me-2"></i>john.doe@gmail.com</p>

          <div className="ratio ratio-16x9 mt-4">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+69009+Lyon&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;