import { Component, OnInit } from '@angular/core';

import { Book } from '../../Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public testCase: any;

  constructor( ) { }

  ngOnInit() { }
}
