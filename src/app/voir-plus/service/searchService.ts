import {Injectable} from "@angular/core";
import {ImageListeModel} from "../models/imageListe.model";
import {ImageListeService} from "./imageListe.service";

@Injectable({
 providedIn: 'root'
})
export class SearchService {

  searchTerm: string = '';
  imageListe: ImageListeModel[] = [];
  filteredListe: ImageListeModel[] = [];
  paginatedListe: ImageListeModel[] = [];
  pageSize: number = 6;
  pageIndex: number = 0;

  constructor(private imageListeService: ImageListeService) {
    this.imageListe = this.imageListeService.imageListe;
    this.filteredListe = [...this.imageListe];
    this.paginate()
  }


search(): void {
  if (this.searchTerm) {
    this.filteredListe = this.imageListe.filter(image =>
      image.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  } else {
    this.filteredListe = [...this.imageListe];
  }
  this.paginate();
}

  paginate(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedListe = this.filteredListe.slice(start, end);
  }

  previousPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.paginate();
    }
  }

  nextPage(): void {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredListe.length) {
      this.pageIndex++;
      this.paginate();
    }
  }
}
