import { Component, OnInit, OnDestroy } from '@angular/core';

interface BookMini {
  id: string | number;
  title: string;
  author?: string;
  price?: number;
  image?: string;
}

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlist: BookMini[] = [];
  private storageKey = 'wishlist';

  ngOnInit(): void {
    this.loadWishlist();
  }

  ngOnDestroy(): void {
    // placeholder for cleanup if you add subscriptions later
  }

  loadWishlist(): void {
    const raw = localStorage.getItem(this.storageKey);
    this.wishlist = raw ? JSON.parse(raw) : [];
  }

  remove(item: BookMini): void {
    this.wishlist = this.wishlist.filter(b => b.id !== item.id);
    localStorage.setItem(this.storageKey, JSON.stringify(this.wishlist));
  }

  clearAll(): void {
    this.wishlist = [];
    localStorage.removeItem(this.storageKey);
  }
}