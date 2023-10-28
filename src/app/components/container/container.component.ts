import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  selectedProd: product;

  textSearched = '';

  selectedFilter: string = 'all';
  SearchedVal: any;

  ngOnInit(): void {}

  onSelectedProdEmitted(event: any) {
    this.selectedProd = event;
  }

  onModelClosed(event: any) {
    this.selectedProd = event;
  }

  onClick(htmlEl: HTMLInputElement) {
    this.textSearched = htmlEl.value;
  }

  onSelectedFilter(filterStr: string) {
    this.selectedFilter = filterStr;
  }
}
