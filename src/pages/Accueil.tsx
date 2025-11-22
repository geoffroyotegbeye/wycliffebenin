import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      gradient: 'linear-gradient(135deg, #001f5f 0%, #ff6600 100%)',
      title: "La Parole de Dieu pour les Peuples",
      subtitle: "Atteindre les non-atteints avec la Parole de Dieu dans leur langue!"
    },
    {
      gradient: 'linear-gradient(135deg, #ff6600 0%, #001f5f 100%)',
      title: "Traduction Biblique",
      subtitle: "Plus de 25 langues en cours de traduction au Kenya et en Afrique de l'Est"
    },
    {
      gradient: 'linear-gradient(135deg, #001f5f 0%, #003d8f 50%, #ff6600 100%)',
      title: "Alphabétisation",
      subtitle: "Développer les compétences en lecture pour transformer les communautés"
    },
    {
      gradient: 'linear-gradient(135deg, #ff6600 0%, #ff8833 50%, #001f5f 100%)',
      title: "Développement Linguistique",
      subtitle: "Préserver et développer les langues minoritaires"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="w-full">
      {/* Hero Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: slide.gradient }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-5xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">{slide.title}</h1>
                <p className="text-xl md:text-3xl drop-shadow-md">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/donnez"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition shadow-lg"
          >
            Faire un Don
          </Link>
          <Link
            to="/activites"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition"
          >
            Notre Travail
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Work Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-secondary mb-6 text-center">Notre Travail</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Traduction biblique, programmes d'alphabétisation durable et de développement linguistique 
            parmi les petits groupes linguistiques au Kenya et au-delà.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bible Translation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="w-full h-48 flex items-center justify-center text-white text-6xl" style={{ background: 'linear-gradient(135deg, #001f5f 0%, #003d8f 100%)' }}>
                <span>📖</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">Traduction Biblique</h3>
                <p className="text-gray-700 mb-4">
                  Fournir les Écritures dans les petits groupes linguistiques au Kenya et dans la région 
                  d'Afrique de l'Est. BTL est actuellement impliqué dans plus de 25 langues au Kenya et 
                  récemment dans la région d'Afrique de l'Est.
                </p>
                <Link
                  to="/traduction-ecrite"
                  className="text-primary font-semibold hover:text-primary-600 transition"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>

            {/* Literacy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="w-full h-48 flex items-center justify-center text-white text-6xl" style={{ background: 'linear-gradient(135deg, #ff6600 0%, #ff8833 100%)' }}>
                <span>✏️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">Alphabétisation</h3>
                <p className="text-gray-700 mb-4">
                  Améliorer le développement social et économique par la fourniture de compétences en 
                  alphabétisation aux petits groupes linguistiques ; des compétences adéquates en 
                  alphabétisation sont essentielles pour prendre des décisions concrètes, réduire la 
                  pauvreté et l'exclusion sociale.
                </p>
                <Link
                  to="/alphabetisation"
                  className="text-primary font-semibold hover:text-primary-600 transition"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>

            {/* Language Development */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="w-full h-48 flex items-center justify-center text-white text-6xl" style={{ background: 'linear-gradient(135deg, #001f5f 0%, #ff6600 100%)' }}>
                <span>🗣️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">Développement Linguistique</h3>
                <p className="text-gray-700 mb-4">
                  Voir les langues d'abord développées en systèmes d'écriture. Cela permet à la communauté 
                  de développer de la littérature dans et pour leur langue. De plus, c'est un élément clé 
                  de la traduction biblique.
                </p>
                <Link
                  to="/activites"
                  className="text-primary font-semibold hover:text-primary-600 transition"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Projets</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { name: 'Traduction Biblique Ogiek', category: 'Traduction Biblique', link: '/projets' },
              { name: 'Traduction Biblique Waata', category: 'Traduction Biblique', link: '/projets' },
              { name: 'Traduction Biblique Taveta', category: 'Traduction Biblique', link: '/projets' },
              { name: 'Traduction Biblique Tugen', category: 'Traduction Biblique', link: '/projets' },
              { name: 'Traduction Biblique Chonyi', category: 'Alphabétisation', link: '/projets' },
              { name: 'Traduction Biblique Daasanach', category: 'Développement Linguistique', link: '/projets' }
            ].map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-primary"
              >
                <span className="inline-block bg-primary-50 text-primary text-xs px-3 py-1 rounded-full mb-3 font-medium">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-secondary">{project.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Business & Fundraising */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-secondary mb-6 text-center">
            Entreprises BTL & Collecte de Fonds
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Nos initiatives commerciales et de collecte de fonds pour les projets
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CICC Ruiru */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-64 flex items-center justify-center text-white text-8xl" style={{ background: 'linear-gradient(135deg, #001f5f 0%, #003d8f 100%)' }}>
                <span>🏢</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">CICC Ruiru</h3>
                <p className="text-gray-700 mb-4">
                  BTL-CICC est un environnement chrétien sans distraction pour les réunions d'entreprise, 
                  les retraites et la détente totale pour les familles et les individus.
                </p>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li>• Installations de conférence</li>
                  <li>• Hébergement</li>
                  <li>• Forfaits mariage et jardins</li>
                  <li>• Installations récréatives</li>
                  <li>• Salon, Barbier, Lavage auto</li>
                </ul>
                <Link
                  to="/booking"
                  className="text-primary font-semibold hover:text-primary-600 transition"
                >
                  Réserver maintenant →
                </Link>
              </div>
            </div>

            {/* Tafsiri Business */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-64 flex items-center justify-center text-white text-8xl" style={{ background: 'linear-gradient(135deg, #ff6600 0%, #ff8833 100%)' }}>
                <span>💼</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">Entreprises Tafsiri</h3>
                <p className="text-gray-700 mb-4">
                  Les entreprises Tafsiri sont des initiatives génératrices de revenus pour BTL. 
                  Leurs bénéfices soutiennent la traduction biblique et l'alphabétisation dans le pays et au-delà.
                </p>
                <ul className="text-gray-700 mb-4 space-y-2">
                  <li>• Imprimerie Tafsiri</li>
                  <li>• Librairie Tafsiri</li>
                  <li>• Services de traduction</li>
                </ul>
                <Link
                  to="/services"
                  className="text-primary font-semibold hover:text-primary-600 transition"
                >
                  Nos services →
                </Link>
              </div>
            </div>
          </div>

          {/* Run for the Bibleless */}
          <div className="mt-8 bg-gradient-to-r from-secondary to-secondary-600 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="w-full h-full flex items-center justify-center text-white text-9xl min-h-[300px]" style={{ background: 'linear-gradient(135deg, #ff6600 0%, #ff9933 100%)' }}>
                <span>🏃</span>
              </div>
              <div className="p-8 text-white flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">Course pour les Sans-Bible</h3>
                <p className="mb-6">
                  Un événement annuel de collecte de fonds visant à partager la vision, créer une 
                  sensibilisation à notre travail et collecter des fonds pour soutenir notre travail 
                  de projet dans plus de 25 petits groupes linguistiques que nous servons.
                </p>
                <Link
                  to="/nos-rdv"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition w-fit shadow-lg"
                >
                  Participer →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* News & Events */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-secondary mb-6 text-center">Actualités & Événements</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Nos dernières nouvelles et informations
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* News 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="w-full h-48 flex items-center justify-center text-white text-6xl" style={{ background: 'linear-gradient(135deg, #001f5f 0%, #003d8f 100%)' }}>
                <span>👔</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">9 octobre 2025</span>
                <h3 className="text-xl font-bold text-secondary mt-2 mb-3">
                  Transition de direction : Directeur exécutif désigné de BTL
                </h3>
                <p className="text-gray-700 mb-4">
                  Nous sommes heureux d'annoncer la nomination de M. Samuel Muia Kakui comme prochain 
                  directeur exécutif de Bible Translation and Literacy East Africa (BTL). Son mandat 
                  débutera officiellement le 1er janvier 2026.
                </p>
                <Link
                  to="/actualites"
                  className="text-primary font-semibold hover:text-primary-600 transition"
                >
                  Lire plus →
                </Link>
              </div>
            </div>

            {/* News 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="w-full h-48 flex items-center justify-center text-white text-6xl" style={{ background: 'linear-gradient(135deg, #ff6600 0%, #ff8833 100%)' }}>
                <span>📖</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">12 septembre 2025</span>
                <h3 className="text-xl font-bold text-secondary mt-2 mb-3">
                  Dédicace de Bible – Nouveau Testament Chuka
                </h3>
                <p className="text-gray-700 mb-4">
                  Louez Dieu pour l'achèvement de la traduction du Nouveau Testament Gichuka. 
                  La date de dédicace a été fixée au samedi 18 octobre 2025, à Chuka, comté de Tharaka Nithi, 
                  à partir de 10h00.
                </p>
                <Link
                  to="/actualites"
                  className="text-primary font-semibold hover:text-primary-600 transition"
                >
                  Lire plus →
                </Link>
              </div>
            </div>

            {/* News 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="w-full h-48 flex items-center justify-center text-white text-6xl" style={{ background: 'linear-gradient(135deg, #001f5f 0%, #ff6600 100%)' }}>
                <span>🙏</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">15 août 2025</span>
                <h3 className="text-xl font-bold text-secondary mt-2 mb-3">
                  15 âmes précieuses ont répondu à l'appel du salut
                </h3>
                <p className="text-gray-700 mb-4">
                  Il y a eu une pause. Puis les mains ont commencé à se lever. Une par une. 
                  Puis par deux et par trois. Au total, 15 âmes précieuses ont répondu à l'appel 
                  du salut ce jour-là.
                </p>
                <Link
                  to="/temoignages"
                  className="text-primary font-semibold hover:text-primary-600 transition"
                >
                  Lire plus →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/actualites"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition shadow-lg"
            >
              Voir toutes les actualités
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accueil;
