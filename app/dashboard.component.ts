import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']

})

export class DashboardComponent implements OnInit {
  // create a heroes array property
  heroes: Hero[] = [];

  // inject the HeroService in the constructor and hold it in a private heroService field
  constructor(
  private router: Router,
  private heroService: HeroService) {}

  // call the service to get heroes inside the Angular ngOnInit lifecycle hook
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  
gotoDetail(hero: Hero) {
  // set a route link parameters array
  let link = ['/detail', hero.id];

  // pass the array to the router's navigate method
  this.router.navigate(link);
}

}
