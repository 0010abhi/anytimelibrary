import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'app-user-profile',
  providers: [LibraryService],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userData;
  constructor(
    private http: HttpClient,
    private libraryService: LibraryService
  ) { }

  users: any;
  books: any;
  inventory: any;

  getInitData(): void {
    // this.libraryService.getUsers().subscribe((data) => {
    //   this.users = data;
    // });
    this.libraryService.getBooks().subscribe((data) => {
      this.books = data;
    });
    this.libraryService.getInventory().subscribe((data) => {
      this.inventory = data;
    });
  }
  
  ngOnInit(): void {
    this.getInitData();
  }

  // deleteData(): void {
  //   this.results = this.results.splice(0, 2);
  //   console.log(this.results);
  // }

  addData(): void {
    this.users = this.libraryService.modifyBooksData('abhi', {"firstName": "Zora", "lastName": "Randhawa"}, this.users);
    console.log(this.users);
    // this.libraryService.modifyBooksData('abhi', {"firstName": "Zora", "lastName": "Randhawa"}, this.users)
    //     .then((res)=> {console.log(res)})
    //     .catch((err)=>{console.log(err)});
  }

}