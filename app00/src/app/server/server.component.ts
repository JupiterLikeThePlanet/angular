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
    //as long as a string is returned, values can be interpolated in  {{}}
    serverId = 10;
    status = 'offline';
    onlineStatus = 'online';
    
    // you can also declare the value type. Not necessary but you can
    // serverId: number = 10
    // status: string = 'offline'
    // onlineStatus: string = 'online';

    serverStatus(){
        return this.onlineStatus ;
    }
    

}