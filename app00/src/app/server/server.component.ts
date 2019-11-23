import { Component } from '@angular/core';

@Component({
    // selector can create an html element 'app-server', or
    // selector: 'app-server',
    //an attribute '[app-server]', or
    // selector: '[app-server]',
    // a class '.app-server'
    selector: '.app-server',
    templateUrl:'./server.component.html',
    // styleUrls:['./server.component.css'],
    styles: [`
        h3 {
            color: blue;
        }
    `]

})

export class ServerComponent{

}