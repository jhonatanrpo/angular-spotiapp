import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas : any[] = [];
  loading  : boolean;
  constructor( private spotifyService: SpotifyService) { }

  buscar( termino:string ){
    this.loading = true;
    this.spotifyService.getArtists(termino)
    .subscribe( data=>{
      this.artistas = data;
    });
    this.loading = false;
  };
  

}
