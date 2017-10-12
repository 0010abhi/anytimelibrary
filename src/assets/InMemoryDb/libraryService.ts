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
  getUsersSync(): any {
    console.log("Sync call");
    this.http.get('/assets/InMemoryDb/users.json');
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
  getConfiguration(): any {
    return this.http.get('/assets/InMemoryDb/libraryConfig.json')
      .map(
      response => {
        return response;
      },
      err => {
        return err;
      });
  }

  getMetadataToIssue(): any {
    return this.http.get('/assets/InMemoryDb/metadataToIssue.json')
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
        console.log(response);
        return response;
      },
      err => {
        return err;
      });
  }

  //getBookDetails
  getBookDetails(booksIssued: any[], books): Promise<any>{
    try{
      var booksToReturn = [], bookIndex;
      if(booksIssued.length>0){
        for (var counter = 0; counter < booksIssued.length; counter++) {
          bookIndex = books.map((data)=>{
            return data.id;
          }).indexOf(booksIssued[counter]);
          booksToReturn.push(books[bookIndex]);
        }
        return Promise.resolve(booksToReturn);
      } else {
        return Promise.reject('No Books Issued. [Atmost 2 books can be issued once.]');
      }
    } catch (error){
      return Promise.reject('Unable to fetch data for books to return');
    } 
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

  //authenticationServices
  logIn1(email,password): Promise<any>{ 
    var resolveObj = {
      "access": "",
      "data": undefined
    };
      if(email==='admin' && password==='admin'){
        resolveObj.access = "AdminAccess";
        return Promise.resolve(resolveObj);
      } else {
        resolveObj.access = "UserAccess";
        resolveObj.data = {
          "username": "abhi",
          "password": "12345678",
          "email": "abhishek.sachdeva@mindtre.com",
          "firstName": "abhishek",
          "lastName": "sachdeva",
          "userId": "101",
          "ratedBooks": [
            {
              "BookId": "",
              "rating": "3.5"
            }
          ],
          "booksLiked": [
            "IdForBook"
          ],
          "IssuedBooks": [
            {
              "bookTitle": "D",
              "bookGenere": "G1",
              "bookThumbnail": "XXX",
              "IssuedDate": "18 Dec, 2017",
              "ReturnDate": "NA"
            },
            {
              "bookTitle": "B",
              "bookGenere": "G1",
              "bookThumbnail": "XXX",
              "IssuedDate": "19 Dec, 2017",
              "ReturnDate": "NA"
            }
          ],
          "logs": [
            {
              "bookTitle": "A",
              "bookGenere": "G1",
              "bookThumbnail": "XXX",
              "IssuedDate": "12 Dec, 2017",
              "ReturnDate": "14 Dec, 2017"
            },
            {
              "bookTitle": "B",
              "bookGenere": "G2",
              "bookThumbnail": "YYY",
              "IssuedDate": "11 Nov, 2017",
              "ReturnDate": "18 Nov, 2017"
            },
            {
              "bookTitle": "C",
              "bookGenere": "G3",
              "bookThumbnail": "ZZZ",
              "IssuedDate": "10 Nov, 2017",
              "ReturnDate": "13 Nov, 2017"
            }
          ]
        }
        return Promise.resolve(resolveObj);
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

  //Book Issue Service TODO:remove users & books as get solution for observables.
  issueTheBook(book, books, user, users): any{
    
  }
}
