export interface NavItem {
  label: string;
  link: string;
  children?: NavItem[];
  hasSubmenu?: boolean;
}

export const navigationData: NavItem[] = [
  {
    label: "Accueil",
    link: "/accueil",
    children: []
  },
  {
    label: "A propos",
    link: "/vision",
    children: [
      { label: "Vision", link: "/vision" },
      {
        label: "Equipe",
        link: "/conseil-administration",
        hasSubmenu: true,
        children: [
          { label: "Conseil d'Administration", link: "/conseil-administration" },
          { label: "Administration Générale", link: "/administration-generale" }
        ]
      },
      { label: "Historique", link: "/historique" },
      { label: "Statistiques", link: "/statistiques" }
    ]
  },
  {
    label: "Activités",
    link: "/pourquoi-traduire",
    children: [
      { label: "Pourquoi et comment traduire?", link: "/pourquoi-traduire" },
      { label: "Cartographie linguistique du BENIN", link: "/cartographie" },
      { label: "Transformation communautaire", link: "/transformation-communautaire" },
      { label: "Traduction en langue des signes (Alogbe)", link: "/traduction-alogbe" },
      {
        label: "Autres traductions",
        link: "/traduction-ecrite",
        hasSubmenu: true,
        children: [
          { label: "Traduction écrite", link: "/traduction-ecrite" },
          { label: "Traduction orale", link: "/traduction-orale" },
          { label: "Traduction visuelle", link: "/traduction-visuelle" },
          { label: "Projet JESUS FILM", link: "/projet-jesus-film" }
        ]
      },
      { label: "Alphabétisation holistique", link: "/alphabetisation" }
    ]
  },
  {
    label: "Rejoignez-nous!",
    link: "/intercedez",
    children: [
      { label: "Intercédez!", link: "/intercedez" },
      { label: "Engagez-vous!", link: "/engagez-vous" },
      { label: "Donnez!", link: "/donnez" },
      { label: "Nos RDV", link: "/nos-rdv" },
      { label: "Nos formations", link: "/nos-formations" }
    ]
  },
  {
    label: "Ressources",
    link: "/services",
    children: [
      { label: "Services au public", link: "/services" },
      { label: "Offres de partenariat", link: "/partenariat" },
      { label: "Recrutement missionnaire", link: "/recrutement" },
      { label: "Boutique en ligne", link: "/boutique" },
      { label: "Booking live!", link: "/booking" }
    ]
  },
  {
    label: "Témoignages",
    link: "/temoignage-transformation",
    children: [
      { label: "Transformation Communautaire", link: "/temoignage-transformation" },
      { label: "Traduction", link: "/temoignage-traduction" },
      { label: "Alphabétisation holistique", link: "/temoignage-alphabetisation" },
      { label: "Partenaires", link: "/temoignage-partenaires" }
    ]
  },
  {
    label: "Blog",
    link: "/actualites",
    children: [
      { label: "Actualités au siège", link: "/actualites" },
      { label: "Missions à l'extérieur", link: "/missions-exterieur" },
      { label: "Vie des communautés", link: "/vie-communautes" },
      { label: "Zoom sur Wycliffe BENIN", link: "/zoom-wycliffe" },
      { label: "Chaîne de Prière", link: "/chaine-priere" },
      { label: "Traduction visuelle (Alogbe)", link: "/blog-alogbe" }
    ]
  },
  {
    label: "Contact",
    link: "/contact",
    children: []
  }
];
