import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'app-user-panel',
  providers: [LibraryService],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  constructor(
    private libraryService: LibraryService
  ) { }

  booksData: any;
  getInitData(): void {
    this.libraryService.getBooks().subscribe((data) => {
      this.booksData = data;
      console.log(this.booksData);
    });
  }

  ngOnInit() {
    this.getInitData();
  }

}
