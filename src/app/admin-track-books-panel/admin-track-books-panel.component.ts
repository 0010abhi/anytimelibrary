import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'app-admin-track-books-panel',
  providers: [LibraryService],
  templateUrl: './admin-track-books-panel.component.html',
  styleUrls: ['./admin-track-books-panel.component.scss']
})
export class AdminTrackBooksPanelComponent implements OnInit {

  @Input() bookData;
  
  constructor(
    private libraryService: LibraryService
  ) { }

  booksIssued: any;

  ngOnInit() {
    console.log(this.libraryService.getBooks());
    this.libraryService.getBooks().then(data=>{
      this.booksIssued = data;
    }).catch(err=>{
      alert(err);
    });
  }

}
