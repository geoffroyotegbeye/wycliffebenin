import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Heart, CreditCard, Building, Smartphone, Globe, CheckCircle } from 'lucide-react';

const Donnez = () => {
  return (
    <div className="w-full">
      <HeroSection
        title="Soutenez Notre Mission"
        subtitle="Votre générosité permet de rendre la Parole de Dieu accessible à tous"
        image='/images/communaute-04.webp'
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Pourquoi Donner ?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Chaque don, petit ou grand, contribue directement à traduire la Bible, 
              alphabétiser les communautés et transformer des vies pour l'éternité.
            </p>
          </div>
        </ScrollAnimation>

        {/* Impact des Dons */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              L'Impact de Votre Don
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimation animation="scale" delay={0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center border-t-4 border-orange-600">
                <div className="text-4xl font-bold text-orange-600 mb-2">10 000 FCFA</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Matériel Pédagogique
                </h3>
                <p className="text-gray-700">
                  Financez le matériel pédagogique pour un apprenant en alphabétisation pendant 1 mois
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center border-t-4 border-orange-600">
                <div className="text-4xl font-bold text-orange-600 mb-2">50 000 FCFA</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Formation Annuelle
                </h3>
                <p className="text-gray-700">
                  Parrainez la formation complète d'un apprenant en alphabétisation pendant 1 an
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center border-t-4 border-orange-600">
                <div className="text-4xl font-bold text-orange-600 mb-2">500 000 FCFA</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Équipement d'un Centre
                </h3>
                <p className="text-gray-700">
                  Équipez un centre d'alphabétisation complet avec du matériel pédagogique et informatique
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Moyens de Don */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Comment Donner ?
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <CreditCard className="mx-auto mb-4 text-orange-600" size={48} />
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Carte Bancaire
                </h3>
                <p className="text-gray-700 mb-4">
                  Paiement sécurisé en ligne par carte bancaire
                </p>
                <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-button font-semibold hover:bg-orange-700 transition w-full">
                  Donner
                </button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <Building className="mx-auto mb-4 text-orange-600" size={48} />
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Virement Bancaire
                </h3>
                <p className="text-gray-700 mb-2 text-sm">
                  Virement direct sur notre compte bancaire
                </p>
                <p className="text-gray-600 text-xs mb-4">
                  Contactez-nous pour les coordonnées bancaires
                </p>
                <Link 
                  to="/contact"
                  className="inline-block bg-white text-blue-900 border-2 border-blue-900 px-6 py-2 rounded-button font-semibold hover:bg-blue-950 hover:text-white transition w-full"
                >
                  Nous Contacter
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <Smartphone className="mx-auto mb-4 text-orange-600" size={48} />
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Mobile Money
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Momo:</strong> +229 66 39 34 34
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Flooz:</strong> +229 64 23 18 08
                </p>
                <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-button font-semibold hover:bg-orange-700 transition w-full">
                  Envoyer
                </button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.4}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <Globe className="mx-auto mb-4 text-orange-600" size={48} />
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  International
                </h3>
                <p className="text-gray-700 mb-4">
                  PayPal, Western Union, MoneyGram
                </p>
                <button className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-2 rounded-button font-semibold hover:bg-blue-950 transition w-full">
                  Options
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Don Mensuel */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-card shadow-elevated p-12 mb-16 text-center">
            <Heart className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Devenez Partenaire Mensuel
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Un don mensuel régulier nous permet de planifier et de soutenir durablement 
              nos projets de traduction et d'alphabétisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg">
                5 000 FCFA/mois
              </button>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg">
                10 000 FCFA/mois
              </button>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg">
                25 000 FCFA/mois
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Coordonnées Complètes pour Dons */}
        <ScrollAnimation animation="fadeIn">
          <div className="bg-gradient-to-br from-blue-900 to-secondary-600 rounded-card p-8 mb-16 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Coordonnées pour Vos Dons
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Smartphone size={24} className="text-orange-600" />
                  Mobile Money
                </h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">Momo (MTN):</span>
                    <span>+229 66 39 34 34</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Flooz (Moov):</span>
                    <span>+229 64 23 18 08</span>
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Globe size={24} className="text-orange-600" />
                  Contact
                </h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Téléphone:</span> +229 66 39 34 34</p>
                  <p><span className="font-semibold">Email:</span> infos@wycliffebenin.org</p>
                  <p><span className="font-semibold">Site:</span> www.wycliffebenin.com</p>
                  <p><span className="font-semibold">Adresse:</span> 02 BP 348 Cotonou</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Avantages Fiscaux */}
        <ScrollAnimation animation="fadeIn">
          <div className="bg-gray-50 rounded-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Avantages Fiscaux
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Réduction d'Impôt</h3>
                  <p className="text-gray-700">
                    Vos dons sont déductibles des impôts selon la législation en vigueur. 
                    Un reçu fiscal vous sera automatiquement envoyé.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Transparence Totale</h3>
                  <p className="text-gray-700">
                    Nous publions annuellement nos rapports financiers détaillant l'utilisation 
                    de chaque don reçu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Suivi de l'Impact</h3>
                  <p className="text-gray-700">
                    Recevez régulièrement des nouvelles sur l'impact de votre don et 
                    l'avancement des projets soutenus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Projets à Soutenir */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Projets à Soutenir
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="scale" delay={0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 border-t-4 border-orange-600">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Centre d'Hébergement et de Retraite
                </h3>
                <p className="text-gray-700 mb-4">
                  Construction d'un centre d'hébergement et de retraite pour les missionnaires, 
                  offrant un lieu de repos et de ressourcement.
                </p>
                <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-button font-semibold hover:bg-orange-700 transition w-full">
                  Soutenir ce projet
                </button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 border-t-4 border-blue-900">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Studio Multimédia Plus Équipé
                </h3>
                <p className="text-gray-700 mb-4">
                  Construction d'un studio multimédia plus équipé avec les dernières technologies 
                  pour la production audio et vidéo de qualité professionnelle.
                </p>
                <button className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-2 rounded-button font-semibold hover:bg-blue-950 transition w-full">
                  Soutenir ce projet
                </button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 border-t-4 border-orange-600">
                <div className="text-4xl mb-4">🖨️</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Imprimerie Numérique
                </h3>
                <p className="text-gray-700 mb-4">
                  Création d'une imprimerie numérique moderne pour produire des matériels 
                  pédagogiques, des Bibles et des livres en langues locales.
                </p>
                <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-button font-semibold hover:bg-orange-700 transition w-full">
                  Soutenir ce projet
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Témoignages */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Ils Ont Donné
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "Donner à Wycliffe Bénin est un investissement éternel. Savoir que mon 
                  don aide des personnes à découvrir la Bible me remplit de joie."
                </p>
                <div className="font-bold text-blue-900">Sophie M.</div>
                <div className="text-sm text-gray-600">Partenaire mensuelle</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "J'ai visité un centre d'alphabétisation financé par mes dons. 
                  Voir l'impact concret m'a profondément touché."
                </p>
                <div className="font-bold text-blue-900">Pierre K.</div>
                <div className="text-sm text-gray-600">Donateur régulier</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "Notre église soutient Wycliffe depuis 5 ans. C'est une bénédiction 
                  de participer à cette œuvre extraordinaire."
                </p>
                <div className="font-bold text-blue-900">Pasteur Jean D.</div>
                <div className="text-sm text-gray-600">Église partenaire</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Call to Action Final */}
        <ScrollAnimation animation="scale">
          <div className="bg-blue-900 rounded-card shadow-elevated p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Faites la Différence Aujourd'hui
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Votre don, quel que soit son montant, a un impact éternel. 
              Rejoignez-nous dans cette mission extraordinaire !
            </p>
            <button className="bg-white text-orange-600 border-2 border-orange-600 px-12 py-4 rounded-button font-semibold hover:bg-orange-700 transition shadow-lg text-lg">
              Faire un Don Maintenant
            </button>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Donnez;
