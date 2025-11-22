const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
      <p className="text-lg text-gray-700 mb-8">
        Contactez-nous pour toute question ou demande d'information.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Informations de contact</h2>
          <div className="space-y-3">
            <p><strong>Adresse:</strong> Cotonou, Bénin</p>
            <p><strong>Email:</strong> contact@wycliffe-benin.org</p>
            <p><strong>Téléphone:</strong> +229 XX XX XX XX</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Envoyez-nous un message</h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Nom" 
              className="w-full px-4 py-2 border rounded-md"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 border rounded-md"
            />
            <textarea 
              placeholder="Message" 
              rows={4}
              className="w-full px-4 py-2 border rounded-md"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
