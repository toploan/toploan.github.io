import { Component, AfterContentInit } from '@angular/core';

declare var $:any;

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
