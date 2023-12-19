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
      location: 'Toliara',
      prix_destination: '500 000 Ar'
    },
    {
      title: 'Tsingy',
      description: 'Parc National des Tsingy de Bemaraha',
      imageUrl: './assets/image_accueil/caméléon.jpg',
      location: 'Morondava',
      prix_destination: '700 000 Ar'
    },
    {
      title: 'Ranomafana',
      description: 'Parc National de Ranomafana',
      imageUrl: './assets/image_accueil/ranomafana.jpg',
      location: 'Fianarantsoa',
      prix_destination: '450 000 Ar'
    },
    {
      title: 'Andasibe',
      description: 'Parc National d\'Andasibe Mantadia',
      imageUrl: './assets/image_accueil/andasibe.jpg',
      location: 'Moramanga',
      prix_destination: '590 000 Ar'
    },
    {
      title: 'Ankarana',
      description: 'Parc National de l\'Ankarana',
      imageUrl: './assets/image_accueil/ankarana.jpg',
      location: 'Antsiranana',
      prix_destination: '580 000 Ar'
    },
    {
      title: 'Ankarafantsika',
      description: 'Parc National d\'Ankarafantsika',
      imageUrl: './assets/image_accueil/ankarafantsika.jpg',
      location: 'Mahajanga',
      prix_destination: '450 000 Ar'
    },
    {
      title: 'Zombitse',
      description: 'Parc National de Zombitse Vohibasia',
      imageUrl: './assets/image_accueil/zombitse.jpg',
      location: 'Toliara',
      prix_destination: '350 000 Ar'
    },
    {
      title: 'Kirindy',
      description: 'Parc National de Kirindy Mitea',
      imageUrl: './assets/image_accueil/kirindy.jpg',
      location: 'Morondava',
      prix_destination: '600 000 Ar'
    },
    {
      title: 'Tsimanampetsotsa',
      description: 'Parc National de Tsimanampetsotsa',
      imageUrl: './assets/image_accueil/tsimanampetsotsa.jpg',
      location: 'Toliara',
      prix_destination: '430 000 Ar'
    },
    {
      title: 'Marojejy',
      description: 'Parc National de Marojejy',
      imageUrl: './assets/image_accueil/marojejy.jpg',
      location: 'Sambava',
      prix_destination: '580 000 Ar'
    },
    {
      title: 'Masoala',
      description: 'Parc National de Masoala',
      imageUrl: './assets/image_accueil/masoala.jpg',
      location: 'Maroantsetra',
      prix_destination: '390 000 Ar'
    },
    {
      title: 'Makira',
      description: 'Parc National de Makira',
      imageUrl: './assets/image_accueil/makira.jpg',
      location: 'Toamasina',
      prix_destination: '507 000 Ar'
    }
  ];

}
