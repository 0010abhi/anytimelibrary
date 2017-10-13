import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'book-log',
  providers: [LibraryService],
  templateUrl: './book-log.component.html',
  styleUrls: ['./book-log.component.scss']
})
export class BookLogComponent implements OnInit {
  @Input() issuedBook;
  @Input() bookData;
  @Input() getBookPlace;
  @Input() logs;
  constructor(
    private libraryService: LibraryService
  ) { }
  modalId: any;
  targetModalId: any;
  ratingArray = [1,2,3,4,5];
  
  todaysDate = new Date();
  // bookLocation = {
  //   "block": undefined,
  //   "shelf": undefined
  // }
  ngOnInit() {
    
  }

  // getBookLocation(bookPlaceMetadata, genre, titleLetter): void{
  //   var letters;
  //   var indexGenre = bookPlaceMetadata.map((data)=>{
  //     return data.genre;
  //   }).indexOf(genre);
  //   this.bookLocation.block = bookPlaceMetadata[indexGenre].block;
  //   for (var counter = 0; counter < bookPlaceMetadata[indexGenre].titleStart.length; counter++) {
  //     letters = bookPlaceMetadata[indexGenre].titleStart[counter].letters;
  //     if(letters.match(titleLetter)){
  //       this.bookLocation.shelf = bookPlaceMetadata[indexGenre].titleStart[counter].place;
  //       break;
  //     }
  //   }
  //   console.log("bookLocation", this.bookLocation);  
  // }

  returnBook(book,bookIndex): void{
    console.log("Before return", this.issuedBook);
    this.issuedBook[bookIndex].toDate = this.todaysDate;
    this.libraryService.returnTheBook(book.id,this.issuedBook[bookIndex]).then((res)=>{
      var issuedBooksInd = this.issuedBook.map(data=>{
        return data.id
      }).indexOf(book.id);
      console.log("index To Delete ", issuedBooksInd);
      this.issuedBook.splice(issuedBooksInd,1);
      
      console.log("After return", this.issuedBook);
      this.logs.push(book);
      book.toDate = this.todaysDate;
      console.log(this.logs);
    }).catch((err)=>{
      alert(err);
    })
    
    
  }

  ratingToBook(rating,bookIndex): void{
    this.issuedBook[bookIndex].rating = rating;
  }

}
