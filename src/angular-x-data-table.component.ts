import {Component} from '@angular/core';

@Component({
    selector: 'angular-x-data-table',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<div>
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class AngularXDataTableComponent {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);
    }

}
