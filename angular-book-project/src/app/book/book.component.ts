import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @ViewChild('bForm', { static: true }) 
  book: Book = new Book();
 
  bookForm: FormGroup = new FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  saveBook():any{
    return this.book;
    console.log(this.book)
  }

}
