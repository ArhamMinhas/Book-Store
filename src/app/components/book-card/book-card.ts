// src/app/components/book-card/book-card.component.ts
import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: false,
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCardComponent {
  @Input() book!: Book;  // ✅ ensures 'book' is passed from parent

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/book', this.book.id]);
  }
}