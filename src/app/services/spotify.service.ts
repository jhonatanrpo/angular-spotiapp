import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Corriendo Services");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQD5uWc-b8YHsZBjaw4LuwFdJzcbIMzL74yk1xMzVPuzYq1MeEWkQGZ1aAckFUOYN9hFY0Iwll7MLmRxBmE",
    });
    return this.http.get(url, { headers });
  }

  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=18').pipe(
      map( data => {
        return data["albums"].items;
      })
    );
  }

  getArtists( termino : string ){
    return this.getQuery(`search?q=${termino}&type=artist&market=us&limit=15`).pipe(
      map( data => data['artists'].items ))
  };

  getArtist( id : string ){
    return this.getQuery(`artists/${ id }`);
                //.pipe(map( data => data['artists'].items ))
  };

  getTopTracks( id : string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=CO`)
               .pipe(map( topTracks => topTracks['tracks'] ));
  };
  /*getNewRelease() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDIr7_YsIwGzxG5KxZgVHt6yGzZNjO3wOmouuUXwy0lpMTgLOF2NxeOUzK7ezjj8O2iKHV2nGf_ON-Rw24",
    });

    return this.http
      .get("https://api.spotify.com/v1/browse/new-releases?limit=18", {
        headers,
      })
      .pipe(
        map((data) => {
          return data["albums"].items;
        })
      );
  }*/

  /*getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDIr7_YsIwGzxG5KxZgVHt6yGzZNjO3wOmouuUXwy0lpMTgLOF2NxeOUzK7ezjj8O2iKHV2nGf_ON-Rw24",
    });

    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist&market=us&limit=15`,
        { headers }
      )
      .pipe(
        map((data) => data['artists'].items));
  }*/
}
