import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'app-admin-config-panel',
  providers:[LibraryService],
  templateUrl: './admin-config-panel.component.html',
  styleUrls: ['./admin-config-panel.component.scss']
})
export class AdminConfigPanelComponent implements OnInit {

  constructor(
    private libraryService: LibraryService
  ) { }

  configData = {
    'maxBooksPerUser': undefined,
    'maxDaysPerIssue': undefined
  };
  ngOnInit() {
    this.libraryService.getConfiguration().subscribe((data)=>{
      console.log(data);
      this.configData.maxBooksPerUser = data.maxBooksPerUser;
      this.configData.maxDaysPerIssue = data.maxDaysPerIssue;
    });
  }

}
