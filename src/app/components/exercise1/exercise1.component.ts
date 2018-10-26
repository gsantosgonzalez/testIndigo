import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  public testCase: any;
  public lines: any;
  public solution: string;

  public error: string;
  public solving: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  public solve() {
    this.solving = true;
    this.error = '';

    this.lines = this.testCase.trim().split("\n");

    this.validateTestCase(this.lines)
      .then(() => {
        this.solution = 'Solution';
      })
      .catch((error) => {
        this.error = error;
        this.solution = '';
      });

    this.solving = false;
  }

  public evaluateCase(n, k, value) {
    let top = 0;



    return top;
  }

  public validateTestCase(testCases) {
    return new Promise(
      function (resolve, reject) {
        const t = testCases.shift();

        if (isNaN(t)) {
          reject('Alphabetic characters are not allowed');
        }

        if (t < 1 || t > 100) {
          reject('The number of test cases must between 1 and 100');
        }

        if (testCases.length / t !== 2) {
          reject('There must be ' + t + ' test cases.');
        }

        testCases.forEach((element, index) => {
          if (index % 2 == 0) {
            let rules = element.split(' ');

            if (rules.length !== 2) {
              reject('Two values are required for test number ' + (index + 1) + ' rules');
            }

            let n = rules[0];
            let k = rules[1];

            if (isNaN(k) || isNaN(n)) {
              reject('Alphabetic characters are not allowed');
            }

            if (k < 1 || k > 7) {
              reject('The number of consecutive digits set for the case number ' + (index + 1) + ' is not valid');
            }

            if (n < k || n > 1000) {
              reject('The number of digits set for the case number ' + (index + 1) + ' is not valid ' + n + ' - ' + k);
            }
          } else {
            if (isNaN(element)) {
              reject('Alphabetic characters are not allowed');
            }
          }
        });

        resolve(true);
      }
    );
  }

}
