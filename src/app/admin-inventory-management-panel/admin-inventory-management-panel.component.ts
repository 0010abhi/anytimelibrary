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
  ngOnInit() {
    this.filterByGenre = "NA";
    console.log(this.filterByGenre);
    this.books = this.bookData;
    console.log("Book Data", this.bookData);
  }

}
