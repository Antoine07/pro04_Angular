import { Component, OnInit } from '@angular/core';
import { Album } from '../albums';
import { ALBUMS } from '../mock-albums';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = ALBUMS;

  selectedAlbum: Album;
  title: string = "Details des chansons d'un album...";

  constructor(private aS : AlbumService) {

    console.log('constructor AlbumsComponent');
  }

  ngOnInit() {
    console.log('ngOnInit AlbumsComponent')

    console.log( this.aS.getAlbums() );
  }

  ngOnChanges() {
    console.log('ngOnChanges AlbumsComponent')
  }

  onSelect(album: Album) {
    this.selectedAlbum = album;
  }

  playParent($event: Album) {

    this.albums.map( album => {
      if ($event.id == album.id)
        album.status = 'on'
      else album.status = 'off'
    });
  }
}
