import heroBg from '../assets/hero-bg.jpg';

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
    </div>
  );
}

export default Accueil;