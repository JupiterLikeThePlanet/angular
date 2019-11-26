import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'success-alert',
  templateUrl: './success.component.html',
  // styleUrls: ['./success.component.css']
  styles: [`
        p {
          color: white;
        }

        .success-bg {
          background-color:green;
          border-radius: 0.5em;
          /* opacity: 12%; */
        }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
