import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { BookOpen, FileText, Printer, Languages, GraduationCap, Users, CheckCircle, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Traduction de Documents",
      icon: <Languages className="text-primary" size={48} />,
      description: "Services de traduction professionnelle dans plusieurs langues locales du Bénin.",
      details: [
        "Traduction français ↔ langues locales",
        "Traduction de documents officiels",
        "Traduction de contenus religieux",
        "Révision et relecture"
      ],
      tarif: "Sur devis",
      delai: "3-7 jours"
    },
    {
      title: "Impression et Édition",
      icon: <Printer className="text-secondary" size={48} />,
      description: "Services d'impression de qualité pour vos documents et publications.",
      details: [
        "Impression offset et numérique",
        "Reliure et finition",
        "Design graphique",
        "Impression de livres et brochures"
      ],
      tarif: "À partir de 50 FCFA/page",
      delai: "2-5 jours"
    },
    {
      title: "Formation en Langues",
      icon: <GraduationCap className="text-primary" size={48} />,
      description: "Cours et formations dans les langues locales du Bénin.",
      details: [
        "Cours de langues locales",
        "Formation en alphabétisation",
        "Ateliers linguistiques",
        "Certification disponible"
      ],
      tarif: "15 000 - 50 000 FCFA/session",
      delai: "Sessions mensuelles"
    },
    {
      title: "Consultation Linguistique",
      icon: <FileText className="text-secondary" size={48} />,
      description: "Expertise linguistique pour vos projets de développement.",
      details: [
        "Analyse linguistique",
        "Développement d'orthographe",
        "Création de matériel pédagogique",
        "Conseil en communication"
      ],
      tarif: "Sur devis",
      delai: "Variable"
    },
    {
      title: "Bibliothèque et Ressources",
      icon: <BookOpen className="text-primary" size={48} />,
      description: "Accès à notre collection de livres et ressources linguistiques.",
      details: [
        "Consultation sur place",
        "Prêt de livres",
        "Ressources numériques",
        "Salle de lecture"
      ],
      tarif: "Gratuit (adhésion 5 000 FCFA/an)",
      delai: "Immédiat"
    },
    {
      title: "Salle de Conférence",
      icon: <Users className="text-secondary" size={48} />,
      description: "Location de salle équipée pour vos événements.",
      details: [
        "Capacité : 50-100 personnes",
        "Équipement audiovisuel",
        "Connexion internet",
        "Service traiteur disponible"
      ],
      tarif: "25 000 - 50 000 FCFA/jour",
      delai: "Réservation 7 jours à l'avance"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Services au Public"
        subtitle="Des services professionnels pour répondre à vos besoins linguistiques et éditoriaux"
        image="/images/images1.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Wycliffe Bénin met son expertise linguistique et ses infrastructures 
              au service du public pour soutenir le développement des langues locales.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Détails :</h4>
                  <ul className="space-y-1">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-secondary">Tarif :</span>
                    <span className="text-primary font-medium">{service.tarif}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="text-secondary" size={16} />
                    <span className="text-gray-700">{service.delai}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Horaires */}
        <ScrollAnimation animation="slideUp">
          <div className="bg-gray-50 rounded-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
              Horaires d'Ouverture
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-card p-6 shadow-card">
                <h3 className="font-bold text-secondary mb-4">Jours Ouvrables</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Lundi - Vendredi</span>
                    <span className="font-semibold text-primary">8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Samedi</span>
                    <span className="font-semibold text-primary">9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Dimanche</span>
                    <span className="font-semibold text-gray-500">Fermé</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-card p-6 shadow-card">
                <h3 className="font-bold text-secondary mb-4">Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Téléphone :</span> +229 97 00 00 00</p>
                  <p><span className="font-semibold">Email :</span> services@wycliffebenin.org</p>
                  <p><span className="font-semibold">Adresse :</span> Cotonou, Bénin</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-card shadow-elevated p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Besoin de Nos Services ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Nous Contacter
            </a>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Services;
