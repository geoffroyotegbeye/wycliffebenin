import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const AdministrationGenerale = () => {
  const equipe = [
    {
      nom: "M. Samuel KOFFI",
      poste: "Directeur Exécutif",
      photo: "/images/images1.jpeg",
      bio: "Responsable de la direction générale et de la mise en œuvre de la stratégie organisationnelle.",
      email: "s.koffi@wycliffebenin.org",
      phone: "+229 97 00 00 01"
    },
    {
      nom: "Mme. Rachelle ADJOVI",
      poste: "Directrice des Programmes",
      photo: "/images/images2.jpeg",
      bio: "Supervise tous les programmes de traduction et d'alphabétisation sur le terrain.",
      email: "r.adjovi@wycliffebenin.org",
      phone: "+229 97 00 00 02"
    },
    {
      nom: "M. Éric GBAGUIDI",
      poste: "Directeur Financier",
      photo: "/images/images3.jpeg",
      bio: "Gère les finances, la comptabilité et les rapports financiers de l'organisation.",
      email: "e.gbaguidi@wycliffebenin.org",
      phone: "+229 97 00 00 03"
    },
    {
      nom: "Mme. Claudine HOUNNOU",
      poste: "Responsable RH",
      photo: "/images/images1.jpeg",
      bio: "Gère le recrutement, la formation et le développement du personnel.",
      email: "c.hounnou@wycliffebenin.org",
      phone: "+229 97 00 00 04"
    },
    {
      nom: "M. Fabrice DANSOU",
      poste: "Coordinateur Traduction",
      photo: "/images/images2.jpeg",
      bio: "Coordonne les projets de traduction biblique dans les différentes langues.",
      email: "f.dansou@wycliffebenin.org",
      phone: "+229 97 00 00 05"
    },
    {
      nom: "Mme. Estelle ZINSOU",
      poste: "Responsable Communication",
      photo: "/images/images3.jpeg",
      bio: "Gère la communication interne et externe, les relations publiques et les médias.",
      email: "e.zinsou@wycliffebenin.org",
      phone: "+229 97 00 00 06"
    }
  ];

  const departements = [
    {
      nom: "Département Traduction",
      description: "Coordonne tous les projets de traduction biblique dans les langues locales du Bénin.",
      icon: "📖",
      color: "primary"
    },
    {
      nom: "Département Alphabétisation",
      description: "Développe et met en œuvre des programmes d'alphabétisation holistique.",
      icon: "✏️",
      color: "secondary"
    },
    {
      nom: "Département Formation",
      description: "Forme les traducteurs, alphabétiseurs et leaders communautaires.",
      icon: "🎓",
      color: "gray-800"
    },
    {
      nom: "Département Finance",
      description: "Gère les ressources financières et assure la transparence comptable.",
      icon: "💰",
      color: "primary"
    },
    {
      nom: "Département RH",
      description: "Recrute, forme et accompagne le personnel et les bénévoles.",
      icon: "👥",
      color: "secondary"
    },
    {
      nom: "Département Communication",
      description: "Communique la vision et les activités de l'organisation.",
      icon: "📢",
      color: "gray-800"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <LazyImage 
          src="/images/images1.jpeg" 
          alt="Administration Générale"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Administration Générale
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Une équipe dévouée au service de la mission
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight">
              <div>
                <h2 className="text-4xl font-bold text-secondary mb-6">
                  Notre Équipe Administrative
                </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                L'équipe administrative de Wycliffe Bénin est composée de professionnels 
                qualifiés et passionnés par la mission de l'organisation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ensemble, ils travaillent à assurer le bon fonctionnement de l'organisation, 
                la mise en œuvre efficace des programmes et la gestion responsable des ressources.
              </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-card">
              <h3 className="text-xl font-bold text-secondary mb-4">Contact</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1" size={20} />
                  <span>Cotonou, Bénin</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1" size={20} />
                  <a href="tel:+22997000000" className="hover:text-primary transition">
                    +229 97 00 00 00
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1" size={20} />
                  <a href="mailto:info@wycliffebenin.org" className="hover:text-primary transition">
                    info@wycliffebenin.org
                  </a>
                </div>
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Équipe */}
        <section className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
              Membres de l'Équipe
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((membre, index) => (
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
                    <h3 className="text-xl font-bold text-secondary mb-1">
                      {membre.nom}
                    </h3>
                    <span className="inline-block bg-secondary-50 text-secondary text-sm px-3 py-1 rounded-full font-medium">
                      {membre.poste}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {membre.bio}
                  </p>
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <a 
                      href={`mailto:${membre.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition"
                    >
                      <Mail size={16} />
                      <span className="truncate">{membre.email}</span>
                    </a>
                    <a 
                      href={`tel:${membre.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition"
                    >
                      <Phone size={16} />
                      <span>{membre.phone}</span>
                    </a>
                  </div>
                </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Départements */}
        <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
                Nos Départements
              </h2>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departements.map((dept, index) => (
                <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                  <div className={`bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 ${
                    dept.color === 'primary' ? 'border-primary' :
                    dept.color === 'secondary' ? 'border-secondary' :
                    'border-gray-800'
                  }`}>
                  <div className="text-4xl mb-4">{dept.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {dept.nom}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dept.description}
                  </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <ScrollAnimation animation="slideUp">
          <section className="bg-gradient-to-r from-primary to-primary-600 rounded-card p-12 text-center text-white shadow-elevated">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Notre Équipe
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Nous recherchons constamment des personnes talentueuses et passionnées 
            pour rejoindre notre équipe et contribuer à notre mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/recrutement" 
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Voir les offres
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
            >
              Nous contacter
            </Link>
          </div>
          </section>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default AdministrationGenerale;
