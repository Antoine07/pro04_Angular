import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

// typeScript structure de type
import { Album } from '../albums';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit, OnChanges {

  @Input() album : Album; // une fois que l'on a sélectionné un album
  @Input() title : string;

  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  songs : string[]; // array de string

  // lifeCycle 
  constructor(private aS : AlbumService) {
    console.log('constructor AlbumDetailsComponent 1');
   }

  ngOnInit() {
    console.log('ngOnInit AlbumDetailsComponent')
  }

  // à chaque fois qu'il détecte une valeur qui a changé 
  // et que l'on passe au Component enfant []
  ngOnChanges(){

    // on vérifie que c'est != null
    if( this.album ){
      const albumList = this.aS.getAlbumList(this.album.id); 

      if( albumList ) this.songs = albumList.list;
    }
  }

  play(album: Album) {
    this.onPlay.emit(album); // émettre un album vers le parent
  }
}
