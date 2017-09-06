import {Hello} from './components/hello.component';
import {About} from './components/about.component';
import {People} from './components/people.component';
import {Person} from './components/person.component';
import {PeopleService} from './services/people.service';
import {Transition} from '@uirouter/angular';

/** States */
export const helloState = { name: 'hello', url: '/hello',  component: Hello };

export const aboutState = { name: 'about', url: '/about',  component: About };

export const peopleState = {
  name: 'people',
  url: '/people',
  component: People,
  resolve: [
    {
      token: 'people',
      deps: [PeopleService],
      resolveFn: getPeople,
    }
  ]
};

export function getPeople(peopleSvc: PeopleService) {
  return peopleSvc.getAllPeople();
}

export const personState = {
  name: 'people.person',
  url: '/:personId',
  component: Person,
  resolve: [
    {
      token: 'person',
      deps: [Transition, 'people'],
      resolveFn: getPerson,
    }
  ]
};

export function getPerson(trans, people) {
  return people.find(person => person.id === trans.params().personId);
}
