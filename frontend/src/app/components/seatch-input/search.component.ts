import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchInputComponent implements OnInit {
  ngOnInit(): void {}
  @Output() searchValue = new EventEmitter<any>();
  searchedValue = new FormControl('');
  clearField() {
    this.searchedValue.setValue('');
    this.handleSearch();
  }
  handleSearch() {
    this.searchValue.emit(this.searchedValue.value);
  }
}
