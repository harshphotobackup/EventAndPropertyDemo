import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result : string = ""

  getResult() : void{
    this.result = eval(this.result);
  }
  constructor() { 
  
  }

  ngOnInit() {
  }

}
