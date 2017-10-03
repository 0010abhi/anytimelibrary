import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-tile',
  inputs: ['bookData'],
  templateUrl: './book-detail-tile.component.html',
  styleUrls: ['./book-detail-tile.component.scss']
})
export class BookDetailTileComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
