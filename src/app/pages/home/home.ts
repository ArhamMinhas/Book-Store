import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  categories: string[] = [];
  searchTerm = '';
  selectedCategory = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.filteredBooks = [...this.books];
    this.categories = this.bookService.getCategories();
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredBooks = this.bookService.filterBooks(this.searchTerm, this.selectedCategory);
  }
}