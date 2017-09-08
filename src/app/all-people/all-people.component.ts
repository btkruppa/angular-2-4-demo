import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../services/people.service';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css'],
  providers: [
    PeopleService,
  ],
})
export class AllPeopleComponent implements OnInit {
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
