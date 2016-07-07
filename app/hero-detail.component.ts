import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']

})


export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  

 // inject both the ActivatedRoute service and the HeroService into the constructor, making private variables for both
constructor(
  private heroService: HeroService,
  private route: ActivatedRoute) {
}

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    if (params['id'] !== undefined) {
      let id = +params['id'];
      this.navigated = true;
      this.heroService.getHero(id)
          .then(hero => this.hero = hero);
    } else {

      this.navigated = false;
      // to add new data we have to initialize the hero property to an empty Hero object
      this.hero = new Hero();
    }
  });
}


ngOnDestroy() {
  this.sub.unsubscribe();
}

save() {
  this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
}

goBack(savedHero: Hero = null) {
  this.close.emit(savedHero);
  if (this.navigated) { window.history.back(); }
}


}

