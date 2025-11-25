import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Heart, BookOpen, Users, Clock, Mail, Bell } from 'lucide-react';

const Intercedez = () => {
  const prayerTopics = [
    {
      title: "Pour les Traducteurs",
      icon: <BookOpen className="text-primary" size={32} />,
      description: "Priez pour la sagesse, la précision et l'inspiration divine dans leur travail de traduction.",
      points: [
        "Sagesse dans les choix de mots",
        "Protection contre la fatigue",
        "Compréhension profonde des Écritures",
        "Harmonie dans les équipes"
      ]
    },
    {
      title: "Pour les Communautés",
      icon: <Users className="text-primary" size={32} />,
      description: "Priez pour que les communautés reçoivent la Parole de Dieu avec joie et transformation.",
      points: [
        "Ouverture des cœurs",
        "Transformation des vies",
        "Croissance spirituelle",
        "Unité dans la foi"
      ]
    },
    {
      title: "Pour les Ressources",
      icon: <Heart className="text-primary" size={32} />,
      description: "Priez pour la provision financière et matérielle nécessaire aux projets.",
      points: [
        "Provision financière",
        "Partenaires fidèles",
        "Équipements nécessaires",
        "Sagesse dans la gestion"
      ]
    },
    {
      title: "Pour les Projets",
      icon: <Clock className="text-primary" size={32} />,
      description: "Priez pour l'avancement et l'achèvement des projets de traduction en cours.",
      points: [
        "Respect des délais",
        "Qualité du travail",
        "Collaboration efficace",
        "Impact durable"
      ]
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Intercédez avec Nous"
        subtitle="Votre prière est essentielle pour l'avancement de la Parole de Dieu"
        image="/images/images2.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Le Pouvoir de la Prière
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              La prière est le fondement de notre ministère. Sans elle, rien n'est possible. 
              Nous vous invitons à vous joindre à nous dans l'intercession pour que la Parole 
              de Dieu atteigne chaque peuple dans sa propre langue.
            </p>
          </div>
        </ScrollAnimation>

        {/* Verset Clé */}
        <ScrollAnimation animation="scale" delay={0.2}>
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-card shadow-elevated p-8 mb-16 text-center">
            <p className="text-2xl text-white font-medium italic mb-4">
              "La prière fervente du juste a une grande efficacité."
            </p>
            <p className="text-white text-lg">
              Jacques 5:16
            </p>
          </div>
        </ScrollAnimation>

        {/* Sujets de Prière */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Sujets de Prière
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {prayerTopics.map((topic, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 border-t-4 border-primary">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      {topic.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {topic.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Chaîne de Prière */}
        <ScrollAnimation animation="slideUp">
          <div className="bg-secondary rounded-card shadow-elevated p-8 mb-16">
            <div className="text-center text-white">
              <Bell className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="text-3xl font-bold mb-4">
                Rejoignez Notre Chaîne de Prière
              </h2>
              <p className="text-xl mb-6 text-white/90">
                Recevez chaque semaine des sujets de prière spécifiques et des témoignages 
                de réponses à la prière.
              </p>
              <a
                href="/chaine-priere"
                className="inline-block bg-primary text-white px-8 py-3 rounded-button font-semibold hover:bg-primary-600 transition shadow-lg"
              >
                Rejoindre la Chaîne de Prière
              </a>
            </div>
          </div>
        </ScrollAnimation>

        {/* Demandes de Prière Actuelles */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Demandes de Prière Actuelles
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-6">
                <div className="text-primary font-bold text-sm mb-2">URGENT</div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Projet Fon-Gbe
                </h3>
                <p className="text-gray-700 mb-4">
                  Priez pour l'achèvement de la révision du Nouveau Testament en Fon-Gbe 
                  prévu pour décembre 2024.
                </p>
                <div className="text-sm text-gray-600">
                  Mis à jour il y a 2 jours
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-6">
                <div className="text-primary font-bold text-sm mb-2">EN COURS</div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Formation des Traducteurs
                </h3>
                <p className="text-gray-700 mb-4">
                  15 nouveaux traducteurs en formation. Priez pour leur apprentissage 
                  et leur engagement.
                </p>
                <div className="text-sm text-gray-600">
                  Mis à jour il y a 5 jours
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-card shadow-card p-6">
                <div className="text-primary font-bold text-sm mb-2">BESOIN</div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Provision Financière
                </h3>
                <p className="text-gray-700 mb-4">
                  Besoin de 50 000 € pour financer 3 nouveaux projets de traduction 
                  en 2025.
                </p>
                <div className="text-sm text-gray-600">
                  Mis à jour il y a 1 semaine
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Comment Prier */}
        <ScrollAnimation animation="fadeIn">
          <div className="bg-gray-50 rounded-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
              Comment Prier Efficacement
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Priez avec Foi</h3>
                  <p className="text-gray-700">
                    Croyez que Dieu entend et répond à vos prières selon Sa volonté parfaite.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Priez Régulièrement</h3>
                  <p className="text-gray-700">
                    Établissez un moment quotidien pour intercéder pour notre ministère.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Priez Spécifiquement</h3>
                  <p className="text-gray-700">
                    Utilisez nos sujets de prière pour des intercessions ciblées et précises.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Priez en Communauté</h3>
                  <p className="text-gray-700">
                    Rejoignez d'autres intercesseurs pour prier ensemble avec puissance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Contact pour Demandes de Prière */}
        <ScrollAnimation animation="slideUp">
          <div className="bg-white rounded-card shadow-card p-8 text-center">
            <Mail className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Partagez Vos Demandes de Prière
            </h2>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Vous avez une demande de prière spécifique ? Partagez-la avec nous et 
              notre équipe d'intercesseurs priera pour vous.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-button font-semibold hover:bg-primary-600 transition shadow-lg"
            >
              Envoyer une Demande
            </a>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Intercedez;
