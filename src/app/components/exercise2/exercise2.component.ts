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
    this.solutions = [];

    this.lines = this.testCase.trim().split("\n");

    this.validateTestCase(this.lines)
      .then((response) => {
        const testCases = Object.values(response);

        for (let testCase of testCases) {
          this.solutions.push(this.evaluateCase(testCase));
        }

        this.solving = false;
      })
      .catch((error) => {
        this.error = error;
        this.solutions = [];
      });
  }

  public evaluateCase(testCase) {
    for (let number = parseInt(testCase); number >= 101101; number--) {
      if (this.isPalindrome(number)) {
        for (let factor = 999; factor >= 100; factor--) {
          if (number%factor === 0) {
            if ((number / factor) > 100 && (number / factor) < 1000) {
              return number; // return number + ' = ' + factor + ' * ' + number/factor;
            }
          }
        }
      }
    }
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
          const testCase = parseInt(element.trim());

          if (!testCase || isNaN(testCase)) {
            reject('Alphabetic characters or white spaces are not allowed.');
          }

          if (testCase < 101101 || testCase > 1000000) {
            reject('Value of test case ' + (index + 1) + ' must be between 101101 and 1000000.');
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

  protected reverseString(number): String {
    let str = number.toString();
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let reversed = reverseArray.join("");

    return reversed;
  }

  public changeSolving(event) {
    this.solving = false;
  }
}
