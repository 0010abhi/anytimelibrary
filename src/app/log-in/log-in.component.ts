import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
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
    private libraryService: LibraryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  logIn(user, pass): void {
    this.libraryService.logIn1(user, pass).then(res => {
      console.log(res);
      if (res.access === 'AdminAccess') {
        this.router.navigate(['/admin']);
      } else if (res.access === "UserAccess") {
        this.libraryService.setCurrentUser(res.data);
        this.router.navigate(['/user']);
      } else {
        alert("else res");
      }
    }).catch(err => {
      alert(err);
    })
  }
}
