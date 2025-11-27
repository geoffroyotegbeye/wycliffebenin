import { Mail, Linkedin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const ConseilAdministration = () => {
  const membres = [
    {
      nom: "Dr. Jean AKPOVI",
      poste: "Président du Conseil",
      photo: '/images/equipe-08.webp',
      bio: "Expert en développement communautaire avec plus de 20 ans d'expérience dans le secteur associatif.",
      email: "j.akpovi@wycliffebenin.org"
    },
    {
      nom: "Mme. Marie DOSSOU",
      poste: "Vice-Présidente",
      photo: '/images/equipe-09.webp',
      bio: "Spécialiste en linguistique et traduction, passionnée par la préservation des langues locales.",
      email: "m.dossou@wycliffebenin.org"
    },
    {
      nom: "M. Paul KOUDJO",
      poste: "Trésorier",
      photo: '/images/equipe-05.webp',
      bio: "Expert-comptable et gestionnaire financier avec une forte expérience dans les ONG.",
      email: "p.koudjo@wycliffebenin.org"
    },
    {
      nom: "Rév. Thomas AGBESSI",
      poste: "Secrétaire",
      photo: '/images/equipe-08.webp',
      bio: "Pasteur et théologien, engagé dans l'évangélisation et la formation biblique.",
      email: "t.agbessi@wycliffebenin.org"
    },
    {
      nom: "Mme. Sophie HOUNGBO",
      poste: "Membre",
      photo: '/images/equipe-09.webp',
      bio: "Éducatrice et formatrice en alphabétisation avec une passion pour l'éducation communautaire.",
      email: "s.houngbo@wycliffebenin.org"
    },
    {
      nom: "M. David AZONHIHO",
      poste: "Membre",
      photo: '/images/equipe-05.webp',
      bio: "Juriste spécialisé dans le droit des associations et la gouvernance.",
      email: "d.azonhiho@wycliffebenin.org"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Conseil d'Administration"
        subtitle="Des leaders dévoués qui guident notre organisation vers l'accomplissement de sa mission"
        image='/images/equipe-08.webp'
        height="medium"
        overlay="dark"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="slideUp">
          <section className="mb-16">
            <div className="bg-primary-50 border-l-4 border-orange-600 p-6 rounded-r-card">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Rôle du Conseil d'Administration
              </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le Conseil d'Administration de Wycliffe Bénin est composé de personnes engagées et 
              expérimentées qui apportent leur expertise dans divers domaines pour guider 
              l'organisation dans l'accomplissement de sa mission.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le conseil se réunit régulièrement pour définir les orientations stratégiques, 
              superviser la gestion financière et s'assurer que les activités de l'organisation 
              sont alignées avec sa vision et ses valeurs.
            </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Membres du Conseil */}
        <section className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Membres du Conseil
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membres.map((membre, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition group">
                <div className="h-64 overflow-hidden">
                  <LazyImage 
                    src={membre.photo} 
                    alt={membre.nom}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-blue-900 mb-1">
                      {membre.nom}
                    </h3>
                    <span className="inline-block bg-primary-50 text-orange-600 text-sm px-3 py-1 rounded-full font-medium">
                      {membre.poste}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {membre.bio}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <a 
                      href={`mailto:${membre.email}`}
                      className="text-orange-600 hover:text-orange-700 transition"
                      title="Envoyer un email"
                    >
                      <Mail size={20} />
                    </a>
                    <a 
                      href="#"
                      className="text-orange-600 hover:text-orange-700 transition"
                      title="Profil LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Responsabilités */}
        <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
                Responsabilités du Conseil
              </h2>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollAnimation animation="slideRight" delay={0.1}>
                <div className="bg-white rounded-card p-6 shadow-card border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Gouvernance Stratégique</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Définir la vision et les orientations stratégiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Approuver les plans d'action annuels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Évaluer les performances de l'organisation</span>
                  </li>
                </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <div className="bg-white rounded-card p-6 shadow-card border-l-4 border-blue-900">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Supervision Financière</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>Approuver les budgets annuels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>Superviser la gestion financière</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>Assurer la transparence et la redevabilité</span>
                  </li>
                </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideRight" delay={0.3}>
                <div className="bg-white rounded-card p-6 shadow-card border-l-4 border-gray-800">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Développement Orga
nisationnel</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 mt-1">✓</span>
                    <span>Recruter et évaluer le directeur exécutif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 mt-1">✓</span>
                    <span>Développer les politiques organisationnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-800 mt-1">✓</span>
                    <span>Assurer la conformité légale et réglementaire</span>
                  </li>
                </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.4}>
                <div className="bg-white rounded-card p-6 shadow-card border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Relations Externes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Représenter l'organisation auprès des partenaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Développer des partenariats stratégiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Promouvoir la mission de l'organisation</span>
                  </li>
                </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ConseilAdministration;
