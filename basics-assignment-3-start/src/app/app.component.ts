import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  smells = false;
  clicks = 0
  clickArray = []

  onDetails(){
    this.smells = (!this.smells);
    // console.log(this.smells);
    this.clicks += 1
    console.log("clicks: "+this.clicks);
    this.clickArray.push(this.clicks);
    console.log(this.clickArray);

  }
}
