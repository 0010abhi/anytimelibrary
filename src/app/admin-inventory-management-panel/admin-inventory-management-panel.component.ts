import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-admin-inventory-management-panel',
  templateUrl: './admin-inventory-management-panel.component.html',
  styleUrls: ['./admin-inventory-management-panel.component.scss']
})
export class AdminInventoryManagementPanelComponent implements OnInit {
  @Input() bookData;

  constructor() { }

  books: any;
  filterByGenre: any;
  textFieldMode = [];
  ngOnInit() {
    this.filterByGenre = "NA";
    this.books = this.bookData;
    console.log("Book Data", this.bookData);
  }

  // toggleFieldText(index): void {
  //   console.log("hello", index);
  // }

}
