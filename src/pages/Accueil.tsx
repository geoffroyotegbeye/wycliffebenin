import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

// Composant ProjectsSection
const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Bible Translation',
    'Language Development',
    'Literacy',
    'Mother Tongue Education'
  ];

  const projects = [
    {
      name: 'Traduction Biblique Ogiek',
      category: 'Bible Translation',
      image: '/images/images1.jpeg',
      description: 'Projet de traduction de la Bible en langue Ogiek'
    },
    {
      name: 'Traduction Biblique Waata',
      category: 'Bible Translation',
      image: '/images/images2.jpeg',
      description: 'Projet de traduction de la Bible en langue Waata'
    },
    {
      name: 'Traduction Biblique Taveta',
      category: 'Bible Translation',
      image: '/images/images3.jpeg',
      description: 'Projet de traduction de la Bible en langue Taveta'
    },
    {
      name: 'Traduction Biblique Tugen',
      category: 'Bible Translation',
      image: '/images/images1.jpeg',
      description: 'Projet de traduction de la Bible en langue Tugen'
    },
    {
      name: 'Alphabétisation Chonyi',
      category: 'Literacy',
      image: '/images/images2.jpeg',
      description: 'Programme d\'alphabétisation pour la communauté Chonyi'
    },
    {
      name: 'Développement Linguistique Daasanach',
      category: 'Language Development',
      image: '/images/images3.jpeg',
      description: 'Développement linguistique et traduction pour les Daasanach'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-secondary mb-6 text-center">Projets</h2>
      
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md border-2 ${
              selectedCategory === category
                ? 'bg-primary text-primary border-primary scale-105 shadow-lg'
                : 'bg-white text-secondary border-gray-200 hover:bg-primary hover:text-primary hover:border-primary hover:scale-105'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Carousel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-secondary shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all border-2 border-gray-200 hover:border-primary"
          aria-label="Défiler vers la gauche"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-secondary shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all border-2 border-gray-200 hover:border-primary"
          aria-label="Défiler vers la droite"
        >
          <ChevronRight size={24} />
        </button>

        {/* Projects Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project, index) => (
            <Link
              key={index}
              to="/projets"
              className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary-50 text-primary text-xs px-3 py-1 rounded-full mb-3 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-secondary mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Accueil = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/images1.jpeg',
      title: "La Parole de Dieu pour les Peuples",
      subtitle: "Atteindre les non-atteints avec la Parole de Dieu dans leur langue!"
    },
    {
      image: '/images/images2.jpeg',
      title: "Traduction Biblique",
      subtitle: "Faciliter la traduction de la Bible dans les langues locales du Bénin"
    },
    {
      image: '/images/images3.jpeg',
      title: "Alphabétisation Holistique",
      subtitle: "Développer les compétences en lecture pour transformer les communautés"
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

  const slideRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideRef.current && contentRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
      gsap.fromTo(
        contentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power2.out' }
      );
    }
  }, [currentSlide]);

  return (
    <div className="w-full">
      {/* Hero Carousel */}
      <div className="relative h-[calc(100vh-4rem)] overflow-hidden bg-secondary">
        {heroSlides.map((slide, index) => (
          index === currentSlide && (
            <div
              key={index}
              ref={slideRef}
              className="absolute inset-0"
            >
              {/* Image de fond */}
              <LazyImage 
                src={slide.image} 
                alt={slide.title}
                className="absolute inset-0 w-full h-full"
              />
              {/* Overlay sombre pour améliorer la lisibilité du texte */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
              
              {/* Contenu texte */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div ref={contentRef} className="text-center text-white px-4 max-w-5xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl drop-shadow-xl">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          )
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
            className="bg-primary  px-8 py-3 rounded-lg font-bold hover:bg-primary-600 transition shadow-lg"
           
          >
            Faire un Don
          </Link>
          <Link
            to="/activites"
            className="bg-transparent border-2 border px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-secondary transition"
           
          >
            Notre Travail
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Work Section */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-secondary mb-6 text-center">Notre Travail</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
              Traduction biblique, programmes d'alphabétisation durable et de développement linguistique 
              parmi les petits groupes linguistiques au Bénin et au-delà.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bible Translation */}
            <ScrollAnimation animation="scale" delay={0.1}>
              <div className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition border-t-4 border-primary group">
                <div className="w-full h-64 overflow-hidden">
                  <LazyImage 
                    src="/images/images1.jpeg" 
                    alt="Traduction Biblique"
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-3">Traduction Biblique</h3>
                  <p className="text-gray-700 mb-4">
                    Fournir les Écritures dans les petits groupes linguistiques au Bénin. 
                    Wycliffe Bénin facilite la traduction de la Bible dans les langues locales 
                    pour que chacun puisse lire la Parole de Dieu dans sa langue maternelle.
                  </p>
                  <Link
                    to="/traduction-ecrite"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition group"
                  >
                    En savoir plus 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Literacy */}
            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition border-t-4 border-secondary group">
                <div className="w-full h-64 overflow-hidden">
                  <LazyImage 
                    src="/images/images2.jpeg" 
                    alt="Alphabétisation"
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-3">Alphabétisation</h3>
                  <p className="text-gray-700 mb-4">
                    Améliorer le développement social et économique par la fourniture de compétences en 
                    alphabétisation aux petits groupes linguistiques. Des compétences adéquates en 
                    alphabétisation sont essentielles pour prendre des décisions concrètes et réduire la 
                    pauvreté.
                  </p>
                  <Link
                    to="/alphabetisation"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition group"
                  >
                    En savoir plus 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            {/* Language Development */}
            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition border-t-4 border-gray-800 group">
                <div className="w-full h-64 overflow-hidden">
                  <LazyImage 
                    src="/images/images3.jpeg" 
                    alt="Développement Linguistique"
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
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
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition group"
                  >
                    En savoir plus 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Business & Fundraising */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-secondary mb-6 text-center">
            Entreprises Wycliffe Bénin & Collecte de Fonds
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Nos initiatives commerciales et de collecte de fonds pour les projets
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CICC Ruiru */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-l-4 border-primary">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/images1.jpeg" 
                  alt="Centre de conférence"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">Centre de Conférence</h3>
                <p className="text-gray-700 mb-4">
                  Un environnement chrétien sans distraction pour les réunions d'entreprise, 
                  les retraites et la détente totale pour les familles et les individus.
                </p>
                <ul className="text-gray-600 mb-4 space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Installations de conférence</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Hébergement</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Forfaits mariage et jardins</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Installations récréatives</li>
                  <li className="flex items-center"><span className="text-primary mr-2">✓</span> Salon, Barbier, Lavage auto</li>
                </ul>
                <Link
                  to="/booking"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition group"
                >
                  Réserver maintenant 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Tafsiri Business */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-l-4 border-secondary">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/images2.jpeg" 
                  alt="Entreprises Wycliffe"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">Entreprises Wycliffe</h3>
                <p className="text-gray-700 mb-4">
                  Nos entreprises sont des initiatives génératrices de revenus. 
                  Leurs bénéfices soutiennent la traduction biblique et l'alphabétisation au Bénin et au-delà.
                </p>
                <ul className="text-gray-600 mb-4 space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-secondary mr-2">✓</span> Imprimerie</li>
                  <li className="flex items-center"><span className="text-secondary mr-2">✓</span> Librairie</li>
                  <li className="flex items-center"><span className="text-secondary mr-2">✓</span> Services de traduction</li>
                  <li className="flex items-center"><span className="text-secondary mr-2">✓</span> Formation linguistique</li>
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition group"
                >
                  Nos services 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Run for the Bibleless */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-full overflow-hidden min-h-[300px]">
                <img 
                  src="/images/images3.jpeg" 
                  alt="Course pour les Sans-Bible"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-secondary flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 " style={{ color: '#ffffff' }}>
                  Course pour les Sans-Bible
                </h3>
                <p className="mb-6 " >
                  Un événement annuel de collecte de fonds visant à partager la vision, créer une 
                  sensibilisation à notre travail et collecter des fonds pour soutenir notre travail 
                  de projet dans les communautés linguistiques que nous servons.
                </p>
                <Link
                  to="/nos-rdv"
                  className="inline-block bg-primary px-6 py-3 rounded-lg font-bold hover:bg-primary-600 transition w-fit shadow-lg"
                 
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News 1 */}
            <Link 
              to="/actualites" 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group border-t-4 border-primary"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/images1.jpeg" 
                  alt="Transition de leadership"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary-50 text-primary text-xs px-3 py-1 rounded-full mb-2 font-medium">
                  9 Octobre 2024
                </span>
                <h3 className="text-xl font-bold text-secondary mt-2 mb-3">
                  Transition de leadership : Nouveau Directeur Exécutif
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Nous sommes heureux d'annoncer la nomination d'un nouveau directeur exécutif 
                  pour Wycliffe Bénin. Son mandat débutera officiellement en janvier 2025.
                </p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:text-primary-600 transition">
                  Lire plus 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>

            {/* News 2 */}
            <Link 
              to="/actualites" 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group border-t-4 border-secondary"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/images2.jpeg" 
                  alt="Dédicace de Bible"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-secondary-50 text-secondary text-xs px-3 py-1 rounded-full mb-2 font-medium">
                  12 Septembre 2024
                </span>
                <h3 className="text-xl font-bold text-secondary mt-2 mb-3">
                  Dédicace de Bible – Nouveau Testament Alogbé
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Louez Dieu pour l'achèvement de la traduction du Nouveau Testament en langue Alogbé. 
                  La date de dédicace a été fixée pour octobre 2024 à Cotonou.
                </p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:text-primary-600 transition">
                  Lire plus 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>

            {/* News 3 */}
            <Link 
              to="/temoignages" 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group border-t-4 border-gray-800"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/images3.jpeg" 
                  alt="Témoignages"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full mb-2 font-medium">
                  15 Août 2024
                </span>
                <h3 className="text-xl font-bold text-secondary mt-2 mb-3">
                  15 âmes précieuses ont répondu à l'appel !
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Il y a eu une pause. Puis les mains ont commencé à se lever. Une par une. 
                  Puis par deux et par trois. Au total, 15 âmes précieuses ont répondu à l'appel 
                  du salut ce jour-là.
                </p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:text-primary-600 transition">
                  Lire plus 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/actualites"
              className="inline-block bg-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-600 transition shadow-lg"
              
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
