import { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';

function MentionsLegales() {
  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Mentions légales</h1>

      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body>
            <p>Le présent site est édité par John Doe, développeur web indépendant.</p>
            <p>Adresse : 40 rue Laure Diebold, 69009 Lyon, France</p>
            <p>Téléphone : 10 20 30 40 50</p>
            <p>Email : john.doe@gmail.com</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <p>Ce site est hébergé par GitHub Pages.</p>
            <p>GitHub, Inc. — 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <p>
              Ce site a été réalisé par John Doe, étudiant au{' '}
              <a href="https://www.lecfe.fr" target="_blank" rel="noopener nofollow">
                Centre Européen de formation
              </a>.
            </p>
            <p>
              Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
              <a href="https://pixabay.com" target="_blank" rel="noopener nofollow">
                Pixabay
              </a>.
            </p>
            <p>
              La favicon de ce site a été fournie par{' '}
              <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener nofollow">
                John doe Icons erstellt von Freepik - Flaticon
              </a>.
            </p>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default MentionsLegales;