import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Quote, BookOpen, Heart, Users } from 'lucide-react';

const TemoignageTraduction = () => {
  const temoignages = [
    {
      titre: "Entendre Dieu dans Ma Langue",
      auteur: "Agnès Hounkpatin",
      role: "Membre de l'équipe de traduction Fon-Gbe",
      lieu: "Abomey, Zou",
      date: "Novembre 2024",
      photo: "AH",
      contenu: [
        "Quand j'ai rejoint l'équipe de traduction il y a 5 ans, je ne mesurais pas l'impact que cela aurait sur ma vie et celle de ma communauté.",
        "Traduire la Parole de Dieu n'est pas qu'un travail linguistique. C'est une expérience spirituelle profonde. Chaque mot, chaque phrase doit transmettre exactement ce que Dieu veut dire à mon peuple.",
        "Le jour où nous avons terminé l'Évangile de Jean, j'ai pleuré. Imaginez : pour la première fois dans l'histoire, mon peuple pouvait lire 'Car Dieu a tant aimé le monde...' dans sa propre langue !",
        "Lors de la dédicace, j'ai vu des personnes âgées tenir la Bible et pleurer de joie. Certains disaient : 'Maintenant, je comprends vraiment ce que Dieu dit.' C'est pour ces moments que je vis."
      ],
      impact: [
        "Nouveau Testament complet en Fon-Gbe",
        "5 000 exemplaires distribués",
        "Impact dans 50+ villages",
        "Formation de 10 nouveaux traducteurs"
      ]
    },
    {
      titre: "La Bible qui Parle à Mon Cœur",
      auteur: "Mathieu Gbaguidi",
      role: "Pasteur et utilisateur de la Bible Bariba",
      lieu: "Parakou, Borgou",
      date: "Septembre 2024",
      photo: "MG",
      contenu: [
        "Pendant 20 ans, j'ai prêché en utilisant la Bible en français. Mais beaucoup dans mon église ne comprenaient pas bien le français.",
        "Quand la Bible en Bariba est arrivée, c'était comme si Dieu parlait directement à mon peuple. Les versets prenaient vie d'une manière nouvelle.",
        "J'ai vu des personnes qui assistaient à l'église depuis des années comprendre l'Évangile pour la première fois. Des larmes coulaient pendant les cultes.",
        "Maintenant, nos études bibliques sont vivantes. Les gens posent des questions, partagent leurs découvertes. L'église grandit et se fortifie chaque jour."
      ],
      impact: [
        "Croissance de l'église : +150%",
        "30 nouveaux convertis en 6 mois",
        "5 groupes de maison créés",
        "Engagement spirituel accru"
      ]
    },
    {
      titre: "Un Trésor pour Mon Peuple",
      auteur: "Élisabeth Sossou",
      role: "Traductrice Alogbé (Langue des signes)",
      lieu: "Cotonou, Littoral",
      date: "Octobre 2024",
      photo: "ES",
      contenu: [
        "En tant que personne sourde, j'ai grandi sans accès direct à la Parole de Dieu. Je devais dépendre des interprètes qui ne comprenaient pas toujours notre culture sourde.",
        "Rejoindre le projet de traduction en Alogbé a été le plus grand honneur de ma vie. Traduire la Bible en langue des signes béninoise, c'est donner à mon peuple ce qui lui a toujours manqué.",
        "Quand nous avons projeté les premiers chapitres traduits, j'ai vu des sourds comprendre l'Évangile pour la première fois. Beaucoup pleuraient et signaient 'Merci, merci, merci !'",
        "Maintenant, la communauté sourde du Bénin a accès à la Parole de Dieu dans sa propre langue. C'est un trésor inestimable que nous chérissons."
      ],
      impact: [
        "10 chapitres traduits en Alogbé",
        "500+ sourds touchés",
        "3 églises pour sourds établies",
        "Formation de 5 interprètes"
      ]
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Témoignages de Traduction"
        subtitle="La puissance de la Parole de Dieu dans la langue du cœur"
        image="/images/images1.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Quand Dieu Parle Votre Langue
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              "La foi vient de ce qu'on entend, et ce qu'on entend vient de la parole de Christ." 
              Découvrez comment la traduction biblique change des vies.
            </p>
          </div>
        </ScrollAnimation>

        {/* Verset Clé */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-card shadow-elevated p-8 mb-16 text-center">
            <p className="text-2xl text-white font-medium italic mb-4">
              "Toute Écriture est inspirée de Dieu, et utile pour enseigner, 
              pour convaincre, pour corriger, pour instruire dans la justice."
            </p>
            <p className="text-white text-lg">2 Timothée 3:16</p>
          </div>
        </ScrollAnimation>

        {/* Témoignages */}
        <div className="space-y-12">
          {temoignages.map((temoignage, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                <div className="bg-gradient-to-r from-secondary to-secondary-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary font-bold text-xl flex-shrink-0">
                      {temoignage.photo}
                    </div>
                    <div className="flex-grow text-white">
                      <h3 className="text-2xl font-bold mb-2">{temoignage.titre}</h3>
                      <div className="text-sm text-white/90 mb-1">{temoignage.auteur}</div>
                      <div className="text-sm text-white/80">{temoignage.role}</div>
                      <div className="flex flex-wrap gap-4 text-sm text-white/90 mt-2">
                        <span>📍 {temoignage.lieu}</span>
                        <span>📅 {temoignage.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <Quote className="text-primary mb-4" size={40} />
                    <div className="space-y-4">
                      {temoignage.contenu.map((paragraphe, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed text-lg">
                          {paragraphe}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary-50 rounded-card p-6">
                    <h4 className="font-bold text-secondary mb-4 flex items-center gap-2">
                      <BookOpen className="text-primary" size={20} />
                      Impact du Projet
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {temoignage.impact.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="mt-16 bg-gradient-to-r from-primary to-primary-600 rounded-card shadow-elevated p-12 text-center">
            <BookOpen className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Soutenez la Traduction Biblique
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Chaque don contribue à rendre la Parole de Dieu accessible dans les langues 
              du cœur. Participez à cette œuvre extraordinaire !
            </p>
            <a
              href="/donnez"
              className="inline-block bg-white text-primary px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Faire un Don
            </a>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default TemoignageTraduction;
