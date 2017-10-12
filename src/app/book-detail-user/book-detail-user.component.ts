import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-book-detail-user',
  
  templateUrl: './book-detail-user.component.html',
  styleUrls: ['./book-detail-user.component.scss']
})
export class BookDetailUserComponent implements OnInit {
  @Input() bookData;
  @Input() issuedBook;
  @Input() getBookPlace;
  constructor(
    
  ) { }
  
  ngOnInit() {
    
  }

}
