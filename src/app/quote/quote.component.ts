import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quote:Quote[]=[
new Quote("The early bird catches the warmth",0,0),
new Quote("Do or do not,there is no trial",0,0),
]
  constructor() { }

  ngOnInit(): void {
  }

}
