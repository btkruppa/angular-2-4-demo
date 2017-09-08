import {Component} from '@angular/core';


@Component({
  template: `
  <h3>{{greeting}} galaxy!</h3>
  <button (click)="toggleGreeting()">toggle greeting</button>
  <button (click)="sayHello()">say hello</button>
`})
export class Hello {
  public greeting = 'hello';
  toggleGreeting() {
    this.greeting = this.greeting === 'hello' ? 'whats up' : 'hello';
  }

  sayHello() {
    alert(`The message is ${this.greeting}`);
  }
}
