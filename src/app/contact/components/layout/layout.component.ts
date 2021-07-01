import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '@core/models/employee.model';
import { GeneratorService } from '@core/services/generator.service';

const names = ['jacob', 'laura', 'esteban', 'felipe', 'chanci', 'paul'];


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    salesList: EmployeeData[] = [];
    marketingList: EmployeeData[] = [];

  constructor(
    private generatorService: GeneratorService
  ) { }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.marketingList = this.generatorService.generate(names, [20, 30], 10);
  }

  addItem(list: EmployeeData[], labelName: string) {
    list.unshift({
      label: labelName,
      num: this.generatorService.generateNumber([10, 20])
    });
  }

}
