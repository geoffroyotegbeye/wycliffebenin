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
  Youtube,
  Send,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'hover:bg-red-600' }
  ];

  const quickLinks = [
    { label: 'Contactez-nous', path: '/contact' },
    { label: 'Impliquez-vous', path: '/rejoignez-nous' },
    { label: 'À Propos', path: '/vision' },
    { label: 'Boutique', path: '/boutique' },
    { label: 'Blog', path: '/blog' },
    { label: 'Ressources', path: '/ressources' }
  ];

  const recentPosts = [
    { title: 'Transition de leadership : Nouveau Directeur Exécutif', date: '9 Octobre 2024' },
    { title: 'Dédicace de la Bible - Nouveau Testament Alogbé', date: '12 Septembre 2024' },
    { title: '15 âmes précieuses ont répondu à l\'appel !', date: '15 Août 2024' }
  ];

  return (
    <footer className="text-white mt-16" style={{ backgroundColor: '#001f5f' }}>
      {/* Newsletter Section */}
      <div className="py-8" style={{ backgroundColor: '#ff6600' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Restez Informé</h3>
              <p className="text-white/90">Inscrivez-vous à notre newsletter pour recevoir nos actualités</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 rounded-l-button w-full md:w-80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-secondary text-white px-6 py-3 rounded-r-button font-semibold hover:bg-secondary-600 transition flex items-center gap-2">
                <Send size={18} />
                <span className="hidden sm:inline">S'inscrire</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* À Propos de Nous */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/logo-wycliffebenin.png"
                  alt="Wycliffe BENIN"
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">
                Wycliffe BENIN
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Depuis 1981, nous facilitons la traduction de la Bible et l'alphabétisation 
                dans les langues locales du Bénin.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/10 p-3 rounded-full transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Liens Rapides */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
                Liens Rapides
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-3 mt-6">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-primary transition-all duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
                Contactez-nous
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start text-gray-300 text-sm group">
                  <MapPin size={20} className="mr-3 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <span>Cotonou, Bénin</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <Phone size={20} className="mr-3 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <a href="tel:+22997000000" className="hover:text-primary transition">
                    +229 97 00 00 00
                  </a>
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <Mail size={20} className="mr-3 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@wycliffebenin.org" className="hover:text-primary transition break-all">
                    info@wycliffebenin.org
                  </a>
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <Clock size={20} className="mr-3 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p>Lun - Ven: 8h00 - 16h30</p>
                    <p className="text-xs text-gray-400 mt-1">Sam - Dim: Fermé</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Articles Récents */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
                Articles Récents
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-4 mt-6">
                {recentPosts.map((post, index) => (
                  <li key={index}>
                    <Link to="/blog" className="group block">
                      <p className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock size={12} className="text-primary" />
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} Wycliffe BENIN. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/politique-confidentialite" className="text-sm text-gray-300 hover:text-primary transition">
                Politique de confidentialité
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/conditions-utilisation" className="text-sm text-gray-300 hover:text-primary transition">
                Conditions d'utilisation
              </Link>
              <span className="text-gray-600">•</span>
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
