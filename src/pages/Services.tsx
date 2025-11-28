import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { BookOpen, FileText, Printer, Languages, GraduationCap, Users, CheckCircle, Clock, Video, Car } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Studio Multimédia",
      icon: <Video className="text-orange-600" size={48} />,
      description: "Équipé d'une des plus récentes cartes de son, il offre un cadre d'enregistrement audio et vidéo hors pair.",
      details: [
        "Enregistrement audio professionnel",
        "Production vidéo de qualité",
        "Équipement de pointe",
        "Studio climatisé et insonorisé"
      ],
      tarif: "Sur devis",
      delai: "Réservation à l'avance"
    },
    {
      title: "Salles de Conférence",
      icon: <Users className="text-blue-900" size={48} />,
      description: "Salles climatisées et ventilées, spacieuses, éclairées, meublées et sonorisées, idéales pour séminaires, réunions et conférences.",
      details: [
        "Salles climatisées et ventilées",
        "Équipement audiovisuel complet",
        "Capacité variable selon besoins",
        "Prix imbattables"
      ],
      tarif: "Prix imbattables - Sur devis",
      delai: "Réservation 7 jours à l'avance"
    },
    {
      title: "Transport (Location 4x4)",
      icon: <Car className="text-orange-600" size={48} />,
      description: "Location de luxueuses 4x4 climatisées alliant confort, sécurité et fiabilité pour des déplacements avec prestige.",
      details: [
        "Véhicules 4x4 climatisés",
        "Confort et sécurité garantis",
        "Chauffeurs expérimentés",
        "Déplacements avec prestige"
      ],
      tarif: "Sur devis",
      delai: "Réservation à l'avance"
    },
    {
      title: "Formation",
      icon: <GraduationCap className="text-blue-900" size={48} />,
      description: "Formations en traduction, alphabétisation, développement linguistique et transformation communautaire.",
      details: [
        "Formation en traduction biblique",
        "Formation en alphabétisation",
        "Ateliers linguistiques",
        "Renforcement de capacités"
      ],
      tarif: "Sur devis",
      delai: "Sessions programmées"
    },
    {
      title: "Traduction Biblique",
      icon: <BookOpen className="text-orange-600" size={48} />,
      description: "Services de traduction biblique dans les langues locales du Bénin.",
      details: [
        "Traduction écrite",
        "Traduction orale",
        "Traduction en langue des signes",
        "Révision et vérification"
      ],
      tarif: "Projets sur mesure",
      delai: "Variable selon projet"
    },
    {
      title: "Éducation Inclusive",
      icon: <Users className="text-blue-900" size={48} />,
      description: "Programmes d'éducation inclusive pour tous, y compris les personnes en situation de handicap.",
      details: [
        "Éducation en langue maternelle",
        "Programmes pour sourds (Alogbé)",
        "Matériel pédagogique adapté",
        "Accompagnement personnalisé"
      ],
      tarif: "Sur devis",
      delai: "Variable"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Services au Public"
        subtitle="Des services professionnels pour répondre à vos besoins linguistiques et éditoriaux"
        image='/images/projet-11.webp'
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
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
                  <h3 className="text-xl font-bold text-blue-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Détails :</h4>
                  <ul className="space-y-1">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-blue-900">Tarif :</span>
                    <span className="text-orange-600 font-medium">{service.tarif}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="text-blue-900" size={16} />
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
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Horaires d'Ouverture
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-card p-6 shadow-card">
                <h3 className="font-bold text-blue-900 mb-4">Jours Ouvrables</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Lundi - Vendredi</span>
                    <span className="font-semibold text-orange-600">8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Samedi</span>
                    <span className="font-semibold text-orange-600">9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Dimanche</span>
                    <span className="font-semibold text-gray-500">Fermé</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-card p-6 shadow-card">
                <h3 className="font-bold text-blue-900 mb-4">Contact</h3>
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
          <div className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-card shadow-elevated p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Besoin de Nos Services ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Nous Contacter
            </Link>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Services;
