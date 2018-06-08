import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  total: number = 0;
  percentage = 0;
  gradeName: string = '';
  gradeList = [
    {
      from : 0,
      to: 39,
      gradeName : "Fail"
    },
    {
      from : 40,
      to: 59,
      gradeName : "Second Class"
    },
    {
      from : 60,
      to: 69,
      gradeName : "First Class"
    },
    {
      from : 70,
      to: 100,
      gradeName : "Distinction"
    }
  ];

  calculateTotal(marathi,hindi,english,sanskrit,maths) : void{
    this.total = parseInt(marathi) + parseInt(hindi) + parseInt(english) + parseInt(sanskrit) + parseInt(maths);
  }

  calculatePercentage() : void{
    this.percentage = (this.total / 500) * 100;
  }

  calculateGrade() : void{
    this.gradeList.forEach(grade => {
       if(Math.floor(this.percentage) >= grade.from && Math.floor(this.percentage) <= grade.to)
         this.gradeName = grade.gradeName;
      console.log(Math.floor(this.percentage))
    });
  }


  constructor() { }

  ngOnInit() {
  }

}
