import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // servers = ["Se"]
  smells = false;

  onDetails(){
    this.smells = (!this.smells)
    console.log(this.smells)
    return this.smells
  }
}
