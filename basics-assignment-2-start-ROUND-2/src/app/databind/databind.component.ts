import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  words = ""
  constructor() { }

  onReset(value){
    if(value != ""){
      console.log("value: " + value)
      this.words = ""
    }

  }



  ngOnInit() {
  }

}
