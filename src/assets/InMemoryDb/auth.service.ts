import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    
    isLoggedIn: boolean;
    redirectUrl: string;
  constructor() {
    if(sessionStorage.getItem("isLoogedIn")==='1'){
       this.isLoggedIn = true;
    } else{
        this.isLoggedIn = false; 
    }
   }

  // TODO: replace login with onservable and google+ authenticationServices
  // authenticationServices
  logIn1(email, password): Promise<any> {
    const resolveObj = {
      access: '',
      data: undefined
    };
    if (email === 'admin' && password === 'admin') {
      resolveObj.access = 'AdminAccess';
      this.isLoggedIn = true;
      this.redirectUrl = '/admin';
      return Promise.resolve(resolveObj);
    } else if (email === 'user1' && password === 'user1') {
      resolveObj.access = 'UserAccess';
      this.redirectUrl = '/user';
      this.isLoggedIn = true;
      // const userData = {
      //   'username': 'abhi',
      //   'password': '12345678',
      //   'email': 'abhishek.sachdeva@mindtre.com',
      //   'firstName': 'abhishek',
      //   'lastName': 'sachdeva',
      //   'userId': '101',
      //   'ratedBooks': [],
      //   'booksLiked': [],
      //   'issuedBooks': [],
      //   'logs': []
      // }
      resolveObj.data = 1;
      return Promise.resolve(resolveObj);
    } else if (email === 'user2' && password === 'user2') {
      resolveObj.access = 'UserAccess';
      this.redirectUrl = '/user';
      this.isLoggedIn = true;
      // resolveObj.data = {
      //   'username': 'ajay',
      //   'password': '12345678',
      //   'email': 'ajay.chawla@mindtre.com',
      //   'firstName': 'ajay',
      //   'lastName': 'chawla',
      //   'userId': '103',
      //   'ratedBooks': [],
      //   'booksLiked': [],
      //   'issuedBooks': [],
      //   'logs': []
      // }
      resolveObj.data = 2;
      return Promise.resolve(resolveObj);
    } else {
      return Promise.reject('Aunthentication failed');
    }
  }
}
