import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-track-books-panel',
  templateUrl: './admin-track-books-panel.component.html',
  styleUrls: ['./admin-track-books-panel.component.scss']
})
export class AdminTrackBooksPanelComponent implements OnInit {

  @Input() bookData;
  
  constructor() { }

  booksIssued: any;

  ngOnInit() {
    this.booksIssued = this.bookData;
    console.log("Book Data HHHHH", this.bookData);
  }

}
