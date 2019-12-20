import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  username=""


  constructor() { }

  ngOnInit() {

  }

  onReset(event){
    if(this.username != ""){
      this.username= "";
    }
  }

}
