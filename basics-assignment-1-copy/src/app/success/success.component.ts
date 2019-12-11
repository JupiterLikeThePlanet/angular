import { Component, OnInit } from '@angular/core';

@Component({
    selector: "success-component",
    template: '<div class="success-container"><p class="success-text">success works!</p></div>',
    styles:[`
        .success-text {
            color: white;
            font-size: 2em;
        }
        
        .success-container {
            background-color: green;
            border-radius: 0.5em;
            margin-left: 2em;
            padding: 1em;
        }
        

    `]

})

export class SuccessComponent{

}