import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html'
})
export class TracksComponent  {
  
  tracks: any[] = [];

  constructor( private router: ActivatedRoute, 
               private spotify: SpotifyService ) { 
    this.router.params.subscribe( params=> {
      this.getTracks( params['id']); 
    })
  }

  getTracks( id: string){
    this.spotify.getTopTracks( id )
                .subscribe( tracks => {
                  console.log(tracks);
                  this.tracks = tracks;                  
                });
  }

}
