import heroBg from '../assets/hero-bg.jpg';
import aboutImg from '../assets/john-doe-about.jpg';

function Accueil() {
  return (
    <div>
      <section
        className="text-white d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh'
        }}
      >
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <button className="btn btn-danger mt-3">En savoir plus</button>
      </section>

      <section className="container py-5">
        <div className="row">

          <div className="col-md-6">
            <h3 className="border-bottom border-primary pb-2 d-inline-block">À propos</h3>
            <img src={aboutImg} alt="John Doe au travail" className="img-fluid rounded my-3" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis, ex delectus reiciendis impedit aut iure enim placeat? Natus, quae aut?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis, ex delectus reiciendis impedit aut iure enim placeat? Natus, quae aut?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis, ex delectus reiciendis impedit aut iure enim placeat? Natus, quae aut?</p>
          </div>

          <div className="col-md-6">
            <h3 className="border-bottom border-primary pb-2 d-inline-block">Mes compétences</h3>

            <div className="mt-4">
              <p className="mb-1">HTML5 90%</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
              </div>

              <p className="mb-1">CSS3 80%</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
              </div>

              <p className="mb-1">JavaScript 70%</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
              </div>

              <p className="mb-1">PHP 60%</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
              </div>

              <p className="mb-1">React 50%</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Accueil;