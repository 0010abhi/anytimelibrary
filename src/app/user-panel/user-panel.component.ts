import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  providers: [LibraryService],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  constructor(
    private libraryService: LibraryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  issuedBook: any;
  logs: any;
  currentPanel: any;
  userPanelModel = {
    "user": undefined,
    "booksData": undefined,
    "configuration": undefined,
    "issueMetadata": undefined
  }

  getInitData(): void {
    this.libraryService.getBooks().subscribe((data) => {
      this.userPanelModel.booksData = data;
    });
    this.libraryService.getConfiguration().subscribe((data) => {
      this.userPanelModel.configuration = data;
    })
    this.libraryService.getMetadataToIssue().subscribe((data) => {
      this.userPanelModel.issueMetadata = data;
    })
    this.route.params
    .subscribe(params => {
      this.userPanelModel.user = params;
    });
  }

  ngOnInit() {
    this.getInitData();
    console.log(this.route);
    this.issuedBook = [];
    this.logs = [];
  }

  setCurrentPanel(panelName: string): void {
    this.currentPanel = panelName;
  }
  logOut(): void {
    this.router.navigate(['/login']);
  }

}
