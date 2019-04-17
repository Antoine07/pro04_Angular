import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlbumService } from '../album.service';
import { Album } from '../albums';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter();

  constructor(private aS: AlbumService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //console.log(form.value);
    const albums = this.aS.search(form.value['word']);


    if (albums) {

      this.searchAlbums.emit(albums);

    }
  }

}
