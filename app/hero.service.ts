import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';


// There are scores of operators like toPromise that extend Observable with useful capabilities.
// If we want those capabilities, we have to add the operators ourselves. 
// That's as easy as importing them from the RxJS library 
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               // call the json method of the http Response to extract the data within the response
               .then(response => response.json().data)

               // catch server failures and pass them to an error handler:
               .catch(this.handleError);
  }

    getHero(id: number) {
    return this.getHeroes()
               .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

 save(hero: Hero): Promise<Hero>  {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }
  delete(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

 // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }
  // Update existing Hero
  private put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http
               .put(url, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(() => hero)
               .catch(this.handleError);
  }



  private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}