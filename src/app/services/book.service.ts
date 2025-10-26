import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      price: 15.99,
      image: 'assets/images/gatsby.jpg',
      description: 'A story of wealth, love, and the American dream.'
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Self-Help',
      price: 12.50,
      image: 'assets/images/atomic-habits.jpg',
      description: 'Practical strategies for building good habits and breaking bad ones.'
    },
    {
      id: 3,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Programming',
      price: 29.99,
      image: 'assets/images/clean-code.jpg',
      description: 'A handbook of agile software craftsmanship.'
    },
    {
      id: 4,
      title: 'You Don’t Know JS',
      author: 'Kyle Simpson',
      category: 'Programming',
      price: 24.99,
      image: 'assets/images/ydkjs.jpg',
      description: 'A deep dive into JavaScript core mechanisms.'
    }
  ];

  constructor() {}

  /** ✅ Return all books */
  getBooks(): Book[] {
    return this.books;
  }

  /** ✅ Return all unique categories */
  getCategories(): string[] {
    return Array.from(new Set(this.books.map(book => book.category)));
  }

  /** ✅ Filter by search term and category */
  filterBooks(searchTerm: string, category: string): Book[] {
    let filtered = [...this.books];

    if (searchTerm) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category && category !== 'All') {
      filtered = filtered.filter(book => book.category === category);
    }

    return filtered;
  }

  /** ✅ Get book by ID (for detail page) */
  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }
}
