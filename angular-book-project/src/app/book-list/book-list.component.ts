import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList =Book[] = [];

  constructor(private bService: HttpService) { }

  ngOnInit(): void {
  }

  getBookList(): void {
    this.bService.getBookList().subscribe(
      item => this.bookList = item )
  }

  readBook(book){
    this.bService.readABook(book).subscribe(
      () => this.getBookList() )
  }

}
