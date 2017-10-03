import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail-user',
  templateUrl: './book-detail-user.component.html',
  styleUrls: ['./book-detail-user.component.scss']
})
export class BookDetailUserComponent implements OnInit {
  books = [{
    "title": "11",
    "author": "A",
    "thumbnail": "xyz",
    "isbn": "1111-1111-1111",
    "description": "bla bla aaa",
    "genre": "tech",
    "likes": "1000",
    "rating": "3"
  },
  {
    "title": "12",
    "author": "B",
    "thumbnail": "xyz",
    "isbn": "1111-1111-1111",
    "description": "bla bla aaa",
    "genre": "tech",
    "likes": "1000",
    "rating": "3"
  },
  {
    "title": "13",
    "author": "C",
    "thumbnail": "xyz",
    "isbn": "1111-1111-1111",
    "description": "bla bla aaa",
    "genre": "tech",
    "likes": "1000",
    "rating": "3"
  },
  {
    "title": "14",
    "author": "D",
    "thumbnail": "xyz",
    "isbn": "1111-1111-1111",
    "description": "bla bla aaa",
    "genre": "tech",
    "likes": "1000",
    "rating": "3"
  }]
  constructor() { }

  ngOnInit() {

  }

}
