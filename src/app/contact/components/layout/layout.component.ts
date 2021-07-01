import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeData } from '@core/models/employee.model';
import { GeneratorService } from '@core/services/generator.service';
import { Subscription } from 'rxjs';

const names = ['jacob', 'laura', 'esteban', 'felipe', 'chanci', 'paul'];


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

    salesList: EmployeeData[] = [];
    marketingList: EmployeeData[] = [];
    value: number;
    sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.marketingList = this.generatorService.generate(names, [20, 30], 10);
    this.sub$ = this.generatorService.getData()
    .subscribe(value => {
      this.value = value;
      console.log(value);
    });
  }

  ngOnDestroy() {
    console.log('destroy');
    this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], labelName: string) {
    list.unshift({
      label: labelName,
      num: this.generatorService.generateNumber([10, 20])
    });
  }

}
