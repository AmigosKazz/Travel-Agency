export interface ReservationManage {
  id_reservation: number;
  nom_destination: string;
  prix_total: number;
  date_depart: string;
  date_retour: string;
  nombre_personne: number;
  email_utilisateur: string;
  role_utilisateur: string;
}
