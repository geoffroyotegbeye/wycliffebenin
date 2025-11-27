import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-orange-600" size={28} />,
      title: 'Adresse',
      content: 'Cotonou, Bénin',
      link: null
    },
    {
      icon: <Phone className="text-orange-600" size={28} />,
      title: 'Téléphone',
      content: '+229 97 00 00 00',
      link: 'tel:+22997000000'
    },
    {
      icon: <Mail className="text-orange-600" size={28} />,
      title: 'Email',
      content: 'info@wycliffebenin.org',
      link: 'mailto:info@wycliffebenin.org'
    },
    {
      icon: <Clock className="text-orange-600" size={28} />,
      title: 'Horaires',
      content: 'Lun - Ven: 8h00 - 16h30',
      link: null
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <LazyImage 
          src="/images/images1.jpeg" 
          alt="Contactez-nous"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-secondary/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ScrollAnimation animation="slideUp">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Contactez-nous
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Nous sommes là pour répondre à vos questions et vous accompagner
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Contact Info Cards */}
        <ScrollAnimation animation="slideUp" className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollAnimation 
                key={index} 
                animation="scale" 
                delay={index * 0.1}
              >
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center border-t-4 border-orange-600">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-700 hover:text-orange-600 transition"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-700">{info.content}</p>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Form */}
          <ScrollAnimation animation="slideRight">
            <div className="bg-white rounded-card shadow-card p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Envoyez-nous un message
              </h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-green-100 rounded-full p-4 mb-4">
                    <CheckCircle className="text-green-600" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-button focus:border-orange-600 focus:outline-none transition"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-button focus:border-orange-600 focus:outline-none transition"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-blue-900 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-button focus:border-orange-600 focus:outline-none transition"
                        placeholder="+229 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-blue-900 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-button focus:border-orange-600 focus:outline-none transition"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="don">Faire un don</option>
                      <option value="volontariat">Volontariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-blue-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-button focus:border-orange-600 focus:outline-none transition resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-orange-600 border-2 border-orange-600 px-6 py-4 rounded-button font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollAnimation>

          {/* Map & Additional Info */}
          <ScrollAnimation animation="slideLeft">
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-card shadow-card overflow-hidden">
                <div className="h-80 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.14903501948!2d2.3644!3d6.3654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9b8c3e8e5e5%3A0x8b8b8b8b8b8b8b8b!2sCotonou%2C%20Benin!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Wycliffe Bénin"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-blue-900 to-secondary-600 rounded-card shadow-card p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Visitez-nous</h3>
                <p className="mb-6 text-white/90">
                  Notre bureau est ouvert du lundi au vendredi. N'hésitez pas à nous rendre visite 
                  ou à prendre rendez-vous pour une rencontre.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-orange-600" />
                    <span>Lundi - Vendredi: 8h00 - 16h30</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-orange-600" />
                    <span>Samedi - Dimanche: Fermé</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* FAQ Section */}
        <ScrollAnimation animation="slideUp" className="mt-20">
          <div className="bg-gray-50 rounded-card p-8 md:p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Questions Fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-button p-6 shadow-card">
                <h3 className="font-bold text-blue-900 mb-2">Comment puis-je faire un don ?</h3>
                <p className="text-gray-600 text-sm">
                  Visitez notre page "Donnez" pour découvrir les différentes façons de soutenir notre mission.
                </p>
              </div>
              <div className="bg-white rounded-button p-6 shadow-card">
                <h3 className="font-bold text-blue-900 mb-2">Puis-je devenir bénévole ?</h3>
                <p className="text-gray-600 text-sm">
                  Oui ! Consultez notre page "Engagez-vous" pour en savoir plus sur les opportunités de volontariat.
                </p>
              </div>
              <div className="bg-white rounded-button p-6 shadow-card">
                <h3 className="font-bold text-blue-900 mb-2">Organisez-vous des visites ?</h3>
                <p className="text-gray-600 text-sm">
                  Nous organisons des visites sur rendez-vous. Contactez-nous pour planifier votre visite.
                </p>
              </div>
              <div className="bg-white rounded-button p-6 shadow-card">
                <h3 className="font-bold text-blue-900 mb-2">Comment devenir partenaire ?</h3>
                <p className="text-gray-600 text-sm">
                  Découvrez nos offres de partenariat sur la page "Partenariat" ou contactez-nous directement.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Contact;
