import {Component, OnInit, Input} from '@angular/core';
import {PeopleService} from '../services/people.service';

@Component({
  providers: [
    PeopleService,
  ],
  template: `
    <!-- outer container -->
    <div class="flex-h">

      <!-- inner container for people -->
      <div class="people">
        <h3>Some people:</h3>
        <ul>
          <li *ngFor="let person of people">
            <a uiSref=".person" [uiParams]="{ personId: person.id }">
              {{person.name}}
            </a>
          </li>
        </ul>
      </div>

      <!-- viewport for child view -->
      <ui-view></ui-view>
    </div>
`})
export class People implements OnInit {
  people: any;
  constructor(private peopleService: PeopleService) {

  }

  getPeople(): void {
    this.people = this.peopleService.getAllPeople();
  }

  ngOnInit(): void {
    this.getPeople();
  }
}
