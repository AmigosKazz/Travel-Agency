import {Injectable} from "@angular/core";
import {ImageListeModel} from "../models/imageListe.model";

@Injectable({
  providedIn: 'root'
})
export class ImageListeService{
  imageListe : ImageListeModel[] = [
    {
      title: 'Isalo',
      description: 'Parc National de l\'Isalo',
      imageUrl: 'https://images.unsplash.com/photo-1539186030936-9ea82f3f4ca4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'Toliara'
    },
    {
      title: 'Tsingy',
      description: 'Parc National des Tsingy de Bemaraha',
      imageUrl: './assets/image_accueil/caméléon.jpg',
      location: 'Morondava'
    },
    {
      title: 'Ranomafana',
      description: 'Parc National de Ranomafana',
      imageUrl: './assets/image_accueil/ranomafana.jpg',
      location: 'Fianarantsoa'
    },
    {
      title: 'Andasibe',
      description: 'Parc National d\'Andasibe Mantadia',
      imageUrl: './assets/image_accueil/tourisme.jpg',
      location: 'Moramanga'
    }
  ]

}
