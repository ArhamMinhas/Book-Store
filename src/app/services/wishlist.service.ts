import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlist: Book[] = [];
  private wishlistSubject = new BehaviorSubject<Book[]>([]); // ✅ reactive wishlist
  wishlist$ = this.wishlistSubject.asObservable(); // observable to subscribe to

  constructor() {
    this.loadWishlist();
  }

  private loadWishlist(): void {
    const stored = localStorage.getItem('wishlist');
    this.wishlist = stored ? JSON.parse(stored) : [];
    this.wishlistSubject.next(this.wishlist);
  }

  private saveWishlist(): void {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    this.wishlistSubject.next(this.wishlist);
  }

  getWishlist(): Book[] {
    return this.wishlist;
  }

  addToWishlist(book: Book): void {
    const exists = this.wishlist.some((b) => b.id === book.id);
    if (!exists) {
      this.wishlist.push(book);
      this.saveWishlist();
    }
  }

  removeFromWishlist(bookId: number): void {
    this.wishlist = this.wishlist.filter((b) => b.id !== bookId);
    this.saveWishlist();
  }

  isInWishlist(bookId: number): boolean {
    return this.wishlist.some((b) => b.id === bookId);
  }
}
