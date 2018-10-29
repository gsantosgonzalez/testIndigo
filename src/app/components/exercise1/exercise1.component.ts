import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  public testCase: any;
  public lines: any;
  public solutions: any;

  public error: string;
  public solving: Boolean = false;

  constructor() {
    this.solutions = [];
  }

  ngOnInit() {
  }

  public solve() {
    this.solving = true;
    this.error = '';
    this.solutions = [];

    this.lines = this.testCase.trim().split("\n");

    this.validateTestCase(this.lines)
      .then((response) => {
        const testCases = Object.values(response);

        for (let i = 0; i < testCases.length; i = i + 2) {
          let rules = response[i].split(' ');
          let n = parseInt(rules[0]);
          let k = parseInt(rules[1]);
          let val = response[i + 1];

          this.evaluateCase(n, k, val)
            .then((response) => {
              this.solutions.push(response);
            })
            .catch((error) => {
              this.error = error;
              this.solutions = [];
              return;
            });
        }
      })
      .catch((error) => {
        this.error = error;
        this.solutions = [];
      });

    this.solving = false;
  }

  public evaluateCase(n, k, testCase) {
    return new Promise((resolve, reject) => {
        let top = 0;
        let start = 0;
        let limit = k;

        if (testCase.length != n) {
          reject('The number of digits for test case: ' + testCase + ' must be ' + n);
        }

        while (limit <= n) {
          let val = testCase.substr(start, k);
          let result = 1;

          for (let i = 0; i < k; i++) {
            result *= val[i];
          }

          top = result > top ? result : top;

          start++;
          limit++;
        }

        resolve(top);
      }
    );
  }

  public validateTestCase(testCases) {
    return new Promise(
      function (resolve, reject) {
        const t = testCases.shift().trim();
        if (!t || isNaN(t)) {
          reject('Alphabetic characters or white spaces are not allowed in first line.');
        }

        if (t < 1 || t > 100) {
          reject('The number of test cases must between 1 and 100.');
        }

        if (testCases.length / t !== 2) {
          reject('There must be ' + t + ' test cases.');
        }

        testCases.forEach((element, index) => {
          if (index % 2 == 0) {
            let rules = element.trim().split(' ');

            if (rules.length !== 2) {
              reject('Two values are required for test number ' + (index + 1) + ' rules.');
            }

            let n = parseInt(rules[0]);
            let k = parseInt(rules[1]);

            if (isNaN(k) || isNaN(n)) {
              reject('Alphabetic characters are not allowed.');
            }

            if (k < 1 || k > 7) {
              reject('The number of consecutive digits set for the case number ' + (index + 1) + ' is not valid.');
            }

            if (n < k || n > 1000) {
              reject('The number of digits set for the case number ' + (index + 1) + ' is not valid.');
            }
          } else {
            if (isNaN(element)) {
              reject('Alphabetic characters are not allowed.');
            }
          }
        });

        resolve(testCases);
      }
    );
  }

}
