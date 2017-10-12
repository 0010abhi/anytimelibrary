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

  logIn(user, pass): void {
    console.log(user, pass);
    // Promise.all([
    //   this.libraryService.logIn1(user, pass)
    // ]).then(res => {
    //   console.log(res);
    //   // if (res === 'AdminAccess') {
    //   //   this.router.navigate(['/admin']);
    //   // } else if (res === "UserAccess") {
    //   //   this.router.navigate(['/user']);
    //   // } else {
    //   //   alert(res);
    //   // }
    // }).catch(err => {
    //   alert(err);
    // })

      this.libraryService.logIn1(user, pass).then(res => {
      console.log(res);
      if (res.access === 'AdminAccess') {
        this.router.navigate(['/admin']);
      } else if (res.access === "UserAccess") {
        console.log(res.data);
        this.router.navigate(['/user', res.data]);
      } else {
        alert(res);
      }
    }).catch(err => {
      alert(err);
    })

    // this.libraryService.logIn1(user, pass).then(res => {
    //   if (res === 'AdminAccess') {
    //     this.router.navigate(['/admin']);
    //   } else if (res === "UserAccess") {
    //     this.router.navigate(['/user']);
    //   } else {
    //     alert(res);
    //   }
    // }).catch(err => {
    //   alert(err);
    // })
  }
  logInUser(): void {
    this.router.navigate(['/user']);
  }
}
