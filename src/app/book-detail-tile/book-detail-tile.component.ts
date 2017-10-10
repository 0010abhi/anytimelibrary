import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-tile',
  inputs: ['bookData'],
  templateUrl: './book-detail-tile.component.html',
  styleUrls: ['./book-detail-tile.component.scss']
})
export class BookDetailTileComponent implements OnInit {
  constructor() { }
  @Input() issuedBooks;
  ngOnInit() {
  }

  issueBook(book): void{
    if(this.issuedBooks.length>=2||this.issuedBooks.indexOf(book)>-1){
      return;
    }
    this.issuedBooks.push(book);
  }


}
