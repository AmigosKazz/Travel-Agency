export interface Utilisateur {
  id_utilisateur: number;
  nom_utilisateur: string;
  email_utilisateur: string;
  password_utilisateur: string;
  role_utilisateur: string;
}

export interface Destination {
  id_destination: number;
  nom_destination: string
  prix_destination: number;
}
export interface Reservation {
    utilisateur: Utilisateur;
    destination: Destination;
    date_depart: Date;
    date_retour: Date;
    nombre_personne: number;
    prix_total: number;
}
