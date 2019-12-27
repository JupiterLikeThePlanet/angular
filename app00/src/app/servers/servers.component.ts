import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: 
  // `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  propertyBinding = "property bound"
  serverAdded= ""
  serverName = "enter text here"
  serverCreated = false;

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }


  ngOnInit() {
  }

  onAddServer(){
    this.serverCreated = true;
    return this.serverAdded = "SERVER ADDED! Name of server is "+ this.serverName
  }

  onUpdateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value;
    // console.log(event.target.value); 
  }

}
