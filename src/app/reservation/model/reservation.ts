
export interface Reservation {
    id_reservation: number;
    nom_utilsateur: string;
    email_utilisateur: string;
    destination: string;
    date_depart: Date;
    date_retour: Date;
    nombre_personne: number;
}

export interface Destination {
    id_destination: number;
    nom_destination: string;
}
