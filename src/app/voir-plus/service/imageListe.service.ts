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
      imageUrl: './assets/image_accueil/andasibe.jpg',
      location: 'Moramanga'
    },
    {
      title: 'Ankarana',
      description: 'Parc National de l\'Ankarana',
      imageUrl: './assets/image_accueil/ankarana.jpg',
      location: 'Antsiranana'
    },
    {
      title: 'Ankarafantsika',
      description: 'Parc National d\'Ankarafantsika',
      imageUrl: './assets/image_accueil/ankarafantsika.jpg',
      location: 'Mahajanga'
    },
    {
      title: 'Zombitse',
      description: 'Parc National de Zombitse Vohibasia',
      imageUrl: './assets/image_accueil/zombitse.jpg',
      location: 'Toliara'
    },
    {
      title: 'Kirindy',
      description: 'Parc National de Kirindy Mitea',
      imageUrl: './assets/image_accueil/kirindy.jpg',
      location: 'Morondava'
    },
    {
      title: 'Tsimanampetsotsa',
      description: 'Parc National de Tsimanampetsotsa',
      imageUrl: './assets/image_accueil/tsimanampetsotsa.jpg',
      location: 'Toliara'
    },
    {
      title: 'Marojejy',
      description: 'Parc National de Marojejy',
      imageUrl: './assets/image_accueil/marojejy.jpg',
      location: 'Sambava'
    },
    {
      title: 'Masoala',
      description: 'Parc National de Masoala',
      imageUrl: './assets/image_accueil/masoala.jpg',
      location: 'Maroantsetra'
    },
    {
      title: 'Makira',
      description: 'Parc National de Makira',
      imageUrl: './assets/image_accueil/makira.jpg',
      location: 'Toamasina'
    }
  ];
}
