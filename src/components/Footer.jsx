import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>

            <div className="mt-3">
              <a href="https://github.com/Sach0Mastro" target="_blank" rel="noopener nofollow" className="text-white me-3 fs-4">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener nofollow" className="text-white me-3 fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" target="_blank" rel="noopener nofollow" className="text-white fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Accueil</Link></li>
              <li><Link to="/services" className="text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-white">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white">Me contacter</Link></li>
              <li><Link to="/mentions-legales" className="text-white">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio" className="text-white">Fresh Food</Link></li>
              <li><Link to="/portfolio" className="text-white">Restaurant Akira</Link></li>
              <li><Link to="/portfolio" className="text-white">Espace bien-être</Link></li>
              <li><Link to="/portfolio" className="text-white">SEO</Link></li>
              <li><Link to="/portfolio" className="text-white">Création d'une API</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;