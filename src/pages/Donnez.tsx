import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Heart, CreditCard, Building, Smartphone, Globe, CheckCircle } from 'lucide-react';

const Donnez = () => {
  return (
    <div className="w-full">
      <HeroSection
        title="Soutenez Notre Mission"
        subtitle="Votre générosité permet de rendre la Parole de Dieu accessible à tous"
        image="/images/images1.jpeg"
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
                <div className="text-5xl font-bold text-orange-600 mb-2">25€</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Formation d'un Apprenant
                </h3>
                <p className="text-gray-700">
                  Financez le matériel pédagogique pour un apprenant en alphabétisation pendant 1 mois
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center border-t-4 border-orange-600">
                <div className="text-5xl font-bold text-orange-600 mb-2">100€</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Traduction d'un Chapitre
                </h3>
                <p className="text-gray-700">
                  Contribuez à la traduction d'un chapitre biblique dans une langue locale
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center border-t-4 border-orange-600">
                <div className="text-5xl font-bold text-orange-600 mb-2">500€</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Équipement d'un Centre
                </h3>
                <p className="text-gray-700">
                  Équipez un centre d'alphabétisation avec du matériel informatique et pédagogique
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
                <p className="text-gray-700 mb-4">
                  Virement direct sur notre compte bancaire
                </p>
                <button className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-2 rounded-button font-semibold hover:bg-blue-950 transition w-full">
                  Coordonnées
                </button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <Smartphone className="mx-auto mb-4 text-orange-600" size={48} />
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Mobile Money
                </h3>
                <p className="text-gray-700 mb-4">
                  Paiement via MTN, Moov ou autres services mobiles
                </p>
                <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-button font-semibold hover:bg-orange-700 transition w-full">
                  Numéros
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
                Don Mensuel de 10€
              </button>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg">
                Don Mensuel de 25€
              </button>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg">
                Don Mensuel de 50€
              </button>
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
