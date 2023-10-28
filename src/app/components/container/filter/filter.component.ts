import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  searchedText = '';

  @Output()
  selectedFilterEmitter = new EventEmitter();

  filteredValue = 'all';

  onSelect(e: any) {
    // this.selectedFilterEmitter.emit(e.target.value);
    this.filteredValue = e.target.value;
  }


}
