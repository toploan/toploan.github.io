import { Component, AfterContentInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent implements AfterContentInit {
    /**
     *
     */
    constructor() {
    }
    ngAfterContentInit(){
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    }
 }
