// src/app/models/book.model.ts

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  description?: string;
  image?: string; // relative path to assets e.g. 'assets/images/atomic.jpg'
  price?: number;
  publishedYear?: number;
}
