import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private http: HttpClient) {}
  
  results:any;
  ngOnInit(): void {
     // Make the HTTP request:
    this.http.get('../../assets/InMemoryDb/users.json').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.results = data['results'];
    });
  }

}
