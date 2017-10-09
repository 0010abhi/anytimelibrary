import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LibraryService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): any {
    return this.http.get('/assets/InMemoryDb/users.json')
      .map(
      response => {
        return response;
      },
      err => {
        return err;
      });
  }
  getBooks(): any {
    return this.http.get('/assets/InMemoryDb/books.json')
      .map(
      response => {
        return response;
      },
      err => {
        return err;
      });
  }
  getInventory(): any {
    return this.http.get('/assets/InMemoryDb/inventoryManage.json')
      .map(
      response => {
        return response;
      },
      err => {
        return err;
      });
  }

  //authenticationServices
  logIn(email,password): any{
    try {
      if(email==='admin' && password==='admin'){
        return 'AdminAccess';
      }
      // var userIndex = users.map((data1)=>{
      //   return data1.username;
      // }).indexOf(email);
      // console.log(userIndex);
      // if(userIndex>-1){
      //   if (users[userIndex].password === password){
      //     return "UserAccess";
      //   } else {
      //     return "AuthenticationFailed";  
      //   }
      // } else {
      //   return "NoUserExist";  
      // }
      return "UserAccess";
      // this.getUsers().subscribe((data)=> {
      //   console.log(data);
      //   var users = data;
      //   if(email==='admin' && password==='admin'){
      //     return 'AdminAccess';
      //   }
      //   var userIndex = users.map((data1)=>{
      //     return data1.username;
      //   }).indexOf(email);
      //   console.log(userIndex);
      //   if(userIndex>-1){
      //     if (users[userIndex].password === password){
      //       return "UserAccess";
      //     } else {
      //       return "AuthenticationFailed";  
      //     }
      //   } else {
      //     return "NoUserExist";  
      //   }
      // }, (err) => {
      //   return err.message;
      // });
    } catch (error) {
      return error.message;
    }
  }

  //Creation Services.
  modifyBooksData(bookId, data, books): any{
    try {
      var bookIndex = books.map((data)=>{
        return data.username;
      }).indexOf(bookId);
      console.log(bookIndex);
      bookIndex = 10;
      var fieldsToModify = Object.keys(data);
      console.log(fieldsToModify);
      fieldsToModify.forEach(element => {
        books[bookIndex][element] = data[element];
      });
      return books;
    } catch (error) {
      return "Unable to modify book. Please try again later.";
    }
    
  }
}
