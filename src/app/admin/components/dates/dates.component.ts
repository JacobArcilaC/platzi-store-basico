import { Component, OnInit } from '@angular/core';

import {addDays, format}  from 'date-fns';

@Component({
  selector: 'app-dates',
  template: `<h1>{{ date }}</h1>`,
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  date: string;

  constructor() { }

  ngOnInit() {
    this.date = format(addDays(new Date(), 20), 'yyyy/MMMM/dd');
  }

}
