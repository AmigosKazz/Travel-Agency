export interface Destination {
  id_destination: number;
  nom_destination: string;
  prix_destination: number;
}


export interface ReservationManage {
  id_reservation: number;
  destination: Destination;
  prix_total: number;
  date_depart: string;
  date_retour: string;
  nombre_personne: number;
  email_utilisateur: string;
  role_utilisateur: string;
}
