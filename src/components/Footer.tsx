import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-12 mt-16" style={{ backgroundColor: '#001f5f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* À Propos de Nous */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b-2 border-primary pb-2 inline-block">
              À Propos de Nous
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Wycliffe Bénin est une organisation chrétienne qui a été établie en 1981 
              pour faciliter la traduction de la Bible et l'alphabétisation dans les 
              langues locales du Bénin.
            </p>
            <div className="flex space-x-3 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-primary p-2 rounded-full transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-primary p-2 rounded-full transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-primary p-2 rounded-full transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-primary p-2 rounded-full transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-primary p-2 rounded-full transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b-2 border-primary pb-2 inline-block">
              Liens Rapides
            </h3>
            <ul className="space-y-2 mt-4">
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 text-sm flex items-center"
                >
                  <span className="mr-2">›</span> Contactez-nous
                </Link>
              </li>
              <li>
                <Link 
                  to="/rejoignez-nous" 
                  className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 text-sm flex items-center"
                >
                  <span className="mr-2">›</span> Impliquez-vous
                </Link>
              </li>
              <li>
                <Link 
                  to="/a-propos" 
                  className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 text-sm flex items-center"
                >
                  <span className="mr-2">›</span> À Propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/boutique" 
                  className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 text-sm flex items-center"
                >
                  <span className="mr-2">›</span> Ma Boutique
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 text-sm flex items-center"
                >
                  <span className="mr-2">›</span> Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/ressources" 
                  className="text-gray-300 hover:text-primary hover:translate-x-1 transition-all duration-200 text-sm flex items-center"
                >
                  <span className="mr-2">›</span> Ressources
                </Link>
              </li>
            </ul>
          </div>

          {/* Notre Bureau */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b-2 border-primary pb-2 inline-block">
              Notre Bureau
            </h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start text-gray-300 text-sm">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-primary" />
                <span>Cotonou, Bénin</span>
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <Phone size={18} className="mr-3 mt-1 flex-shrink-0 text-primary" />
                <a href="tel:+22997000000" className="hover:text-primary transition">
                  +229 97 00 00 00
                </a>
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <Mail size={18} className="mr-3 mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:info@wycliffebenin.org" className="hover:text-primary transition">
                  info@wycliffebenin.org
                </a>
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <Clock size={18} className="mr-3 mt-1 flex-shrink-0 text-primary" />
                <span>8h00 - 16h30</span>
              </li>
            </ul>
          </div>

          {/* Articles Récents */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b-2 border-primary pb-2 inline-block">
              Articles Récents
            </h3>
            <ul className="space-y-4 mt-4">
              <li>
                <Link to="/blog" className="group">
                  <p className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors">
                    Transition de leadership : Nouveau Directeur Exécutif
                  </p>
                  <p className="text-xs text-gray-400 mt-1">9 Octobre 2024</p>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="group">
                  <p className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors">
                    Dédicace de la Bible - Nouveau Testament Alogbé
                  </p>
                  <p className="text-xs text-gray-400 mt-1">12 Septembre 2024</p>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="group">
                  <p className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors">
                    15 âmes précieuses ont répondu à l'appel !
                  </p>
                  <p className="text-xs text-gray-400 mt-1">15 Août 2024</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © 2024 Wycliffe BENIN. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
              <Link to="/politique-confidentialite" className="text-sm text-gray-300 hover:text-primary transition">
                Politique de confidentialité
              </Link>
              <Link to="/conditions-utilisation" className="text-sm text-gray-300 hover:text-primary transition">
                Conditions d'utilisation
              </Link>
              <Link to="/mentions-legales" className="text-sm text-gray-300 hover:text-primary transition">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
