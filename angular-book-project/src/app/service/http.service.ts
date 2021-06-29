import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/books';

  constructor( private http: HttpClient) { }

  getBookList():any{
    return this.http.get<Book[]>(this.BASE_URL);
  } 
  

  readABook(id, book):any{
          return this.http.put<Book>(`${this.BASE_URL}/${book.id}`, book);
    }  
  }

