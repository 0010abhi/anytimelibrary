import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setConfig, getConfiguration, updateConfig } from './library.configuration.service';
import 'rxjs/add/operator/map';

@Injectable()
export class LibraryService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Promise<any> {
    try {
      var configData = sessionStorage.getItem("libUsers");
      return Promise.resolve(JSON.parse(configData));
    } catch (error) {
      console.log("error, while fetching all libUsers");
      return Promise.reject("error, while fetching libUsers");
    }
  }
  setUsers(): void {
    this.http.get('/assets/InMemoryDb/users.json')
      .subscribe(
      response => { sessionStorage.setItem("libUsers", JSON.stringify(response)); },
      err => { console.log("error, while setting booksInLibrary as session storage.") }
      );
  }

  setCurrentUser(userInd): void {
    this.getUsers().then((data) => {
      var currentUser = data[userInd];
      sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
    }).catch((err) => {
      console.log("error while setting current user");
      this.setUsers();
      this.setCurrentUser(userInd);
    })
  }

  getCurrentUser(): Promise<any> {
    try {
      var configData = sessionStorage.getItem("currentUser");
      return Promise.resolve(JSON.parse(configData));
    } catch (error) {
      console.log("error, while fetching bookInLibrary");
      return Promise.reject("error, while fetching bookInLibrary");
    }
  }

  setBooks(): void {
    this.http.get('/assets/InMemoryDb/books.json')
      .subscribe(
      response => { sessionStorage.setItem("booksInLibrary", JSON.stringify(response)); },
      err => { console.log("error, while setting booksInLibrary as session storage.") }
      );
  }
  getBooks(): Promise<any> {
    try {
      var configData = sessionStorage.getItem("booksInLibrary");
      return Promise.resolve(JSON.parse(configData));
    } catch (error) {
      console.log("error, while fetching bookInLibrary");
      return Promise.reject("error, while fetching bookInLibrary");
    }
  }
  updateBooks(): any {
    return this.http.get('/assets/InMemoryDb/books.json')
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



  //TODO: replace login with onservable and google+ authenticationServices
  //authenticationServices
  logIn1(email, password): Promise<any> {
    var resolveObj = {
      "access": "",
      "data": undefined
    };
    if (email === 'admin' && password === 'admin') {
      resolveObj.access = "AdminAccess";
      return Promise.resolve(resolveObj);
    } else if (email === 'user1' && password === 'user1') {
      resolveObj.access = "UserAccess";
      // var userData = {
      //   "username": "abhi",
      //   "password": "12345678",
      //   "email": "abhishek.sachdeva@mindtre.com",
      //   "firstName": "abhishek",
      //   "lastName": "sachdeva",
      //   "userId": "101",
      //   "ratedBooks": [],
      //   "booksLiked": [],
      //   "issuedBooks": [],
      //   "logs": []
      // }
      resolveObj.data = 1;
      return Promise.resolve(resolveObj);
    } else if (email === 'user2' && password === 'user2') {
      resolveObj.access = "UserAccess";
      // resolveObj.data = {
      //   "username": "ajay",
      //   "password": "12345678",
      //   "email": "ajay.chawla@mindtre.com",
      //   "firstName": "ajay",
      //   "lastName": "chawla",
      //   "userId": "103",
      //   "ratedBooks": [],
      //   "booksLiked": [],
      //   "issuedBooks": [],
      //   "logs": []
      // }
      resolveObj.data = 2;
      return Promise.resolve(resolveObj);
    } else {
      return Promise.reject("Aunthentication failed");
    }
  }

  //Creation Services.
  modifyBooksData(bookId, data, books): any {
    try {
      var bookIndex = books.map((data) => {
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

  //Book Issue Service.
  issueTheBook(bookId, issueBookObj): Promise<any> {
    try {
      var objForBookJson = {
        "user": undefined,
        // "bookId": bookId,
        "fromDate": issueBookObj.fromDate,
        "toDate": undefined,
        "dueDate": issueBookObj.dueDate
      };
      this.getCurrentUser().then(user => {
        //pused to user obj;
        user.issuedBooks.push(issueBookObj);
        this.updateInMemory("currentUser", user);
        // all user session storage update to keep moving the app till session not closed.
        var allUsers = JSON.parse(sessionStorage.getItem("libUsers"));
        var userFoundIndex = allUsers.map((data) => {
          return data.userId;
        }).indexOf(user.userId);
        allUsers[userFoundIndex].issuedBooks.push(issueBookObj);
        this.updateInMemory("libUsers", allUsers);
        //particular book detail update for admin part.
        objForBookJson.user = user.email;
        var allBooks = JSON.parse(sessionStorage.getItem("booksInLibrary"));
        var bookFoundIndex = allBooks.map((data) => {
          return data.id;
        }).indexOf(bookId);
        allBooks[bookFoundIndex].issuedTo.push(objForBookJson);
        allBooks[bookFoundIndex].issued = allBooks[bookFoundIndex].issuedTo.length;
        this.updateInMemory("booksInLibrary", allBooks);
      })
      return Promise.resolve("Book Issued Successfully.");
    } catch (err) {
      return Promise.resolve("Book Can't be issued. Please try again later.");
    }
  }

  returnTheBook(bookId, bookReturnObj): Promise<any> {
    try {
      this.getCurrentUser().then(user => {
        //current user modification.
        var bookFoundInCurrentUser = user.issuedBooks.map((data) => {
          return data.id;
        }).indexOf(bookId);
        // user.issuedBooks[bookFoundInCurrentUser].toDate = new Date();
        user.logs.push(bookReturnObj);

        // all user session storage update to keep moving the app till session not closed.
        var allUsers = JSON.parse(sessionStorage.getItem("libUsers"));
        var userFoundIndex = allUsers.map((data) => {
          return data.userId;
        }).indexOf(user.userId);
        // allUsers[userFoundIndex].issuedBooks[bookFoundInCurrentUser].toDate = new Date();
        allUsers[userFoundIndex].logs.push(bookReturnObj);
        
        //particular book detail update for admin part.
        var allBooks = JSON.parse(sessionStorage.getItem("booksInLibrary"));
        var bookFoundIndex = allBooks.map((data) => {
          return data.id;
        }).indexOf(bookId);
        var userFoundToRetuenInAllBook = allBooks[bookFoundIndex].issuedTo.map(data=>{
          return data.user;
        }).indexOf(user.email);

        user.issuedBooks.splice(bookFoundInCurrentUser,1);
        this.updateInMemory("currentUser", user);
        
        allUsers[userFoundIndex].issuedBooks.splice(bookFoundInCurrentUser,1);
        this.updateInMemory("libUsers", allUsers);

        allBooks[bookFoundIndex].issuedTo.splice(userFoundToRetuenInAllBook,1);
        allBooks[bookFoundIndex].issued = allBooks[bookFoundIndex].issuedTo.length;
        this.updateInMemory("booksInLibrary", allBooks);
      })
      return Promise.resolve("Book Returned Successfully.");
    } catch (err) {
      return Promise.resolve("Book Can't be returned now. Please try again later.");
    }
  }


  //Configuration Services
  setConfiguration(): void {
    setConfig(this.http);
  }
  getConfiguration(): Promise<any> {
    return getConfiguration();
  }
  updateConfig(data): Promise<any> {
    return updateConfig(data);
  }


  //InMemoryUpdate
  updateInMemory(key, value): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  getInMemoryData(key): Promise<any> {
    try {
      var data = sessionStorage.getItem(key);
      return Promise.resolve(JSON.parse(data));
    } catch (exception) {
      return Promise.reject("Unable to get data from in memory");
    }
  }



  // getInventory(): any {
  //   return this.http.get('/assets/InMemoryDb/inventoryManage.json')
  //     .map(
  //     response => {
  //       console.log(response);
  //       return response;
  //     },
  //     err => {
  //       return err;
  //     });
  // }

  //getBookDetails
  // getBookDetails(booksIssued: any[], books): Promise<any>{
  //   try{
  //     var booksToReturn = [], bookIndex;
  //     if(booksIssued.length>0){
  //       for (var counter = 0; counter < booksIssued.length; counter++) {
  //         bookIndex = books.map((data)=>{
  //           return data.id;
  //         }).indexOf(booksIssued[counter]);
  //         booksToReturn.push(books[bookIndex]);
  //       }
  //       return Promise.resolve(booksToReturn);
  //     } else {
  //       return Promise.reject('No Books Issued. [Atmost 2 books can be issued once.]');
  //     }
  //   } catch (error){
  //     return Promise.reject('Unable to fetch data for books to return');
  //   } 
  // }
}
