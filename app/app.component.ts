import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';


// define an AppComponent class and add the @Component metadata decorator above the class with a my-app selector.
@Component({
  selector: 'my-app',

  // add a template with <h1> tags surrounding a binding to the title property.
template: `
  <h1>{{title}}</h1>
  <nav>
<a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
<a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
styleUrls: ['app/app.component.css'],

  // add the HeroesComponent to the directives array so Angular recognizes the <my-heroes> tags
  directives: [ROUTER_DIRECTIVES],


  // add the HeroService to the providers array because we'll need it in every other view
  providers: [
    HeroService
  ]
})

// export so we can reference during bootstrapping in main.ts
export class AppComponent {
  title = 'Tour of Heroes';
}
