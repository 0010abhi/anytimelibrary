import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  providers: [LibraryService],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  constructor(
    private libraryService: LibraryService,
    private router: Router
  ) { }

  booksData: any;
  currentPanel: any;
  getInitData(): void {
    this.libraryService.getBooks().subscribe((data) => {
      this.booksData = data;
    });
  }

  ngOnInit() {
    this.getInitData();
  }

  setCurrentPanel(panelName: string): void{
    this.currentPanel = panelName;
  }
  logOut():void{
    this.router.navigate(['/login']);
  }

}
