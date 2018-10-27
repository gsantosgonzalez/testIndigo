import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {

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

    this.lines = this.testCase.trim().split("\n");

    this.validateTestCase(this.lines)
      .then((response) => {
        const testCases = response;

        for (let testCase of testCases) {
          this.evaluateCase(testCase)
            .then((response) => {
              this.solutions.push(response);

              this.solving = false;
            })
            .catch((error) => {
              this.error = error;
            });
        }
      })
      .catch((error) => {
        this.error = error;
        this.solutions = [];
      });
  }

  public evaluateCase(testCase) {
    return new Promise((resolve, reject) => {
        for (let number = parseInt(testCase); number > 101101; number--) {

        }
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

        if (testCases.length !== parseInt(t)) {
          reject('There must be ' + t + ' test cases.');
        }

        testCases.forEach((element, index) => {
          const testCase = element.trim();

          if (!testCase || isNaN(testCase)) {
            reject('Alphabetic characters or white spaces are not allowed.');
          }

          if (element < 101101 || element > 1000000) {
            reject('Test case value must be between 101101 and 1000000.');
          }
        });

        resolve(testCases);
      }
    );
  }

  protected isPalindrome(value): Boolean {
    let reverse = this.reverseString(value);
    console.log(value, reverse);

    if (value == reverse) {
      return true;
    }

    return false;
  }

  protected reverseString(str): String {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let reversed = reverseArray.join("");

    return reversed;
}
}
