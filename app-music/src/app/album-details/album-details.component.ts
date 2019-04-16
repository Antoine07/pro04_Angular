import { Component, OnInit, Input } from '@angular/core';

// typeScript structure de type
import { Album } from '../albums';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.sass']
})
export class AlbumDetailsComponent implements OnInit {

  @Input() album : Album;

  // lifeCycle 

  constructor() {
    console.log('constructor AlbumDetailsComponent');
   }

  ngOnInit() {
    console.log('ngOnInit AlbumDetailsComponent')
  }

  ngOnChanges(){
    console.log('ngOnChanges AlbumDetailsComponent')
  }
}
