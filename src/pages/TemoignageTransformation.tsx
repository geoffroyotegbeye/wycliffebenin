import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Quote, Heart, Users, TrendingUp } from 'lucide-react';

const TemoignageTransformation = () => {
  const temoignages = [
    {
      titre: "Une Communauté Transformée par la Parole",
      auteur: "Chef du village de Kpomassè",
      lieu: "Kpomassè, Atlantique",
      date: "Octobre 2024",
      photo: "CK",
      contenu: [
        "Avant l'arrivée de Wycliffe dans notre village, nous vivions dans l'ignorance de la Parole de Dieu. Beaucoup pratiquaient le vodoun sans connaître l'Évangile.",
        "Quand les traducteurs sont venus et ont commencé à traduire la Bible dans notre langue, tout a changé. Pour la première fois, nous pouvions entendre Dieu nous parler directement dans notre cœur.",
        "Aujourd'hui, notre village compte 3 églises florissantes. Les pratiques néfastes ont diminué. Les gens vivent dans la paix et l'harmonie. Nos enfants vont à l'école et apprennent à lire dans leur propre langue.",
        "La transformation est visible partout : moins d'alcoolisme, plus de solidarité, des familles réconciliées. C'est un miracle que nous vivons chaque jour."
      ],
      impact: [
        "3 églises établies",
        "200+ personnes converties",
        "Réduction de 70% des conflits",
        "Amélioration de la scolarisation"
      ]
    },
    {
      titre: "De l'Obscurité à la Lumière",
      auteur: "Marie Assogba",
      lieu: "Savalou, Collines",
      date: "Août 2024",
      photo: "MA",
      contenu: [
        "J'étais prêtresse vodoun pendant 25 ans. Ma vie était remplie de peur et d'oppression. Je faisais des sacrifices, mais je n'avais pas la paix.",
        "Un jour, j'ai entendu l'Évangile dans ma langue maternelle lors d'une projection du film Jésus. Les paroles de Jésus ont touché mon cœur comme jamais auparavant.",
        "J'ai accepté Christ et ma vie a complètement changé. J'ai brûlé tous mes fétiches et je suis devenue une nouvelle créature. La paix que je cherchais depuis des années, je l'ai enfin trouvée.",
        "Aujourd'hui, je témoigne dans mon village et beaucoup d'autres prêtresses ont également abandonné le vodoun pour suivre Jésus. Dieu fait des miracles !"
      ],
      impact: [
        "15 prêtresses converties",
        "Destruction de 30+ fétiches",
        "Église plantée dans le village",
        "50+ baptêmes en 2 ans"
      ]
    },
    {
      titre: "L'Éducation qui Change Tout",
      auteur: "Jean-Baptiste Koffi",
      lieu: "Natitingou, Atacora",
      date: "Septembre 2024",
      photo: "JK",
      contenu: [
        "Dans notre région, l'analphabétisme était un fléau. Les gens ne pouvaient pas lire, même pas leur propre nom. Ils signaient avec leur empreinte digitale.",
        "Wycliffe a ouvert un centre d'alphabétisation dans notre langue. Ma mère, âgée de 55 ans, a décidé d'apprendre à lire. Je ne pensais pas que c'était possible.",
        "Après 6 mois de formation, elle a lu son premier verset biblique devant toute l'église. Nous avons tous pleuré de joie. C'était un moment historique pour notre famille.",
        "Maintenant, elle lit la Bible chaque jour et enseigne à d'autres femmes. L'alphabétisation a ouvert une nouvelle vie pour elle et pour beaucoup d'autres dans notre communauté."
      ],
      impact: [
        "120 adultes alphabétisés",
        "85% de taux de réussite",
        "Création de 3 groupes de lecture",
        "Amélioration économique visible"
      ]
    },
    {
      titre: "Réconciliation et Paix",
      auteur: "Pasteur Thomas Dossou",
      lieu: "Djougou, Donga",
      date: "Juillet 2024",
      photo: "TD",
      contenu: [
        "Notre communauté était divisée par des conflits ethniques qui duraient depuis des générations. Les familles ne se parlaient plus.",
        "Quand la Bible a été traduite dans nos deux langues locales, quelque chose d'extraordinaire s'est produit. Les deux groupes ont commencé à se réunir pour écouter la Parole de Dieu.",
        "Nous avons découvert que nous servons le même Dieu et que nous sommes tous frères et sœurs en Christ. Les barrières sont tombées.",
        "Aujourd'hui, nous avons une église unie où les deux groupes adorent ensemble. Les mariages inter-ethniques sont célébrés. La paix règne enfin dans notre région."
      ],
      impact: [
        "Fin d'un conflit de 30 ans",
        "Église unie de 300 membres",
        "10 mariages inter-ethniques",
        "Développement économique conjoint"
      ]
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Témoignages de Transformation - Wycliffe Bénin | Vies Changées par la Parole"
        description="Lisez les témoignages bouleversants de communautés transformées par la traduction biblique et l'alphabétisation. 85+ communautés touchées, 50 000+ vies changées au Bénin."
        keywords="témoignages, transformation, vies changées, impact, Wycliffe Bénin, histoires, conversion, communautés"
        url="https://wycliffebenin.org/temoignage-transformation"
      />
      <HeroSection
        title="Témoignages de Transformation"
        subtitle="Des vies et des communautés transformées par la Parole de Dieu"
        image="/images/images3.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Des Histoires qui Inspirent
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment la traduction biblique et l'alphabétisation transforment 
              des vies et des communautés entières au Bénin.
            </p>
          </div>
        </ScrollAnimation>

        {/* Statistiques d'Impact */}
        <ScrollAnimation animation="slideUp">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-card shadow-card p-6 text-center border-t-4 border-orange-600">
              <Users className="mx-auto mb-3 text-orange-600" size={40} />
              <div className="text-4xl font-bold text-blue-900 mb-2">85+</div>
              <div className="text-gray-700 font-medium">Communautés Touchées</div>
            </div>
            <div className="bg-white rounded-card shadow-card p-6 text-center border-t-4 border-orange-600">
              <Heart className="mx-auto mb-3 text-orange-600" size={40} />
              <div className="text-4xl font-bold text-blue-900 mb-2">50,000+</div>
              <div className="text-gray-700 font-medium">Vies Transformées</div>
            </div>
            <div className="bg-white rounded-card shadow-card p-6 text-center border-t-4 border-orange-600">
              <TrendingUp className="mx-auto mb-3 text-orange-600" size={40} />
              <div className="text-4xl font-bold text-blue-900 mb-2">120+</div>
              <div className="text-gray-700 font-medium">Églises Plantées</div>
            </div>
            <div className="bg-white rounded-card shadow-card p-6 text-center border-t-4 border-orange-600">
              <Quote className="mx-auto mb-3 text-orange-600" size={40} />
              <div className="text-4xl font-bold text-blue-900 mb-2">1,250+</div>
              <div className="text-gray-700 font-medium">Témoignages Recueillis</div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Témoignages Détaillés */}
        <div className="space-y-12">
          {temoignages.map((temoignage, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-primary-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold text-xl flex-shrink-0">
                      {temoignage.photo}
                    </div>
                    <div className="flex-grow text-white">
                      <h3 className="text-2xl font-bold mb-2">{temoignage.titre}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-white/90">
                        <span>👤 {temoignage.auteur}</span>
                        <span>📍 {temoignage.lieu}</span>
                        <span>📅 {temoignage.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <Quote className="text-orange-600 mb-4" size={40} />
                    <div className="space-y-4">
                      {temoignage.contenu.map((paragraphe, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed text-lg">
                          {paragraphe}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-card p-6">
                    <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="text-orange-600" size={20} />
                      Impact Mesurable
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {temoignage.impact.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
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
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-secondary-600 rounded-card shadow-elevated p-12 text-center">
            <Heart className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold mb-6">
              Faites Partie de l'Histoire
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Votre soutien peut créer d'autres histoires de transformation comme celles-ci. 
              Rejoignez-nous dans cette mission extraordinaire !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donnez"
                className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-orange-700 transition shadow-lg"
              >
                Faire un Don
              </a>
              <a
                href="/engagez-vous"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                S'Engager
              </a>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default TemoignageTransformation;
