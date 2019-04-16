import { Component, OnInit } from '@angular/core';
import { Album } from '../albums';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {

  albums : Album[] = ALBUMS;

  selectedAlbum : Album;

  constructor() { 
    console.log('constructor AlbumsComponent');
  }

  ngOnInit() {
    console.log('ngOnInit AlbumsComponent')
  }

  ngOnChanges(){
    console.log('ngOnChanges AlbumsComponent')
  }

  onSelect(album : Album){
    this.selectedAlbum = album;
  }


}
