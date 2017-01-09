import 'zone.js/dist/zone';
import 'reflect-metadata';

import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AngularXDataTableModule } from 'angular-x-data-table';

@Component({
    selector: 'app',
    template: `<div>
                   <input (keyup)="onKeyUp(input)" #input placeholder="Type Here">
                   {{message}}
                   <hr>
                   Hello world => <hello-world></hello-world>
                   <hr>
               </div>`
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}


bootstrap(App);
