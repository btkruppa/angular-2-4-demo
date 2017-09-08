import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {App} from './components/app.component';
import {Hello} from './components/hello.component';
import {About} from './components/about.component';
import {People} from './components/people.component';
import {Person} from './components/person.component';
import {PeopleService} from './services/people.service';
import {uiRouterConfigFn} from './router.config';
import {helloState, aboutState, peopleState, personState, allPeopleState} from './states';
import { AllPeopleComponent } from './all-people/all-people.component';



const INITIAL_STATES =  [ helloState, aboutState, peopleState, personState, allPeopleState];
const INITIAL_COMPONENTS =  [ App, Hello, About, People, Person ];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      config: uiRouterConfigFn
    }),
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NewComponentComponent,
    App, Hello, About, People, Person, AllPeopleComponent
  ],
  providers: [
    { provide: PeopleService, useClass: PeopleService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
