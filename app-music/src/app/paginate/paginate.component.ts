import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../album.service';

// permet de définir des variables d'environement
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {

  @Output() paginate: EventEmitter<{ start: number, end: number }> = new EventEmitter();

  perPage: number = environment.perPage; // nombre d'albums par page
  pages: number[] = []; // numéro des pages 1, 2, 3, ...
  total: number = 0; // total des albums
  currentPage: number; // page courante
  numberPages: number = 0; // nombre de page(s)

  constructor(private aS: AlbumService) {
    this.total = this.aS.count();
    // on s'abonne à l'observable 

    this.aS.sendCurrentNumberPage.subscribe(
      info => {
        this.currentPage = info.current;

        console.log(info);
      }
    );
  }

  ngOnInit() {
    // initialiser la création des numéros de page
    this.init();
  }

  init(page: number = 1) {
    this.numberPages = Math.ceil(this.total / this.perPage);
    this.currentPage = page;

    for (let p = 0; p < this.numberPages; p++) this.pages.push(p + 1);
  }

  selectedPage(page: number) {
    this.currentPage = page;

    let start = (page - 1) * this.perPage;
    let end = start + this.perPage;

    this.paginate.emit({ start: start, end: end });

    this.aS.sendCurrentNumberPage.next({ current : page, paginate : 1 })
  }

  next() {
    this.currentPage = (this.currentPage == this.numberPages) ? 1 : this.currentPage + 1;
    // console.log(this.currentPage);
    this.selectedPage(this.currentPage);
  }

  previous() {
    this.currentPage = (this.currentPage == 1) ? this.numberPages : this.currentPage - 1;
    this.selectedPage(this.currentPage);
  }

}