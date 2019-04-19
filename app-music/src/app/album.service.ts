import { Injectable } from '@angular/core';
import { Album, List } from './albums'; // types
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS; // _ convention private et protected
  private _albumList: List[] = ALBUM_LISTS;

  // Observer => next et Observable attendre que l'observe lui envoi quelque chose
  sendCurrentNumberPage = new Subject<{current : number, paginate : number}>(); 

  constructor() { }

  getAlbums(order = (a, b) => b.duration - a.duration): Album[] {
    return this._albums.sort(order);
  }

  getAlbum(id: string): Album {
    return this._albums.find(list => list.id === id);
  }

  getAlbumList(id: string): List {
    return this._albumList.find(l => l.id === id);
  }

  count(): number {
    return this._albums == null ? 0 : this._albums.length;
  }

  switchOn(album: Album): void {

    this.getAlbums().map(al => {
      if (album.id === al.id) al.status = 'on';
      else al.status = 'off';
    });
  }

  paginate(start: number, end: number): Album[] {
    return this.getAlbums().slice(start, end);
  }

  search(word: string | null): Album[] {

    if (word == null) return this.getAlbums();

    let albums = [];

    if (word.length > 3) {

      this.getAlbums().forEach(album => {
        if (album.title.includes(word)) albums.push(album);
      });
    }

    return albums;
  }

}