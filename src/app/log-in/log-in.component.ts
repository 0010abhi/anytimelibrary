import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../../assets/InMemoryDb/libraryService';

@Component({
  selector: 'app-log-in',
  providers: [LibraryService],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    private router: Router,
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
  }

  logIn(user,pass): void{
    console.log(user,pass); 
    var logInResult = this.libraryService.logIn(user,pass);
    console.log(logInResult);
    if(logInResult==='AdminAccess'){
      this.router.navigate(['/admin']);
    } else if(logInResult === "UserAccess") {
      this.router.navigate(['/user']);
    } else {
      alert(logInResult);
    }
  } 
  logInUser(): void{
    this.router.navigate(['/user']);
  }
}
