import { Component, EventEmitter, OnInit, Output, HostListener } from '@angular/core';
import { BookService } from '../../services/book.service';
import { WishlistService } from '../../services/wishlist.service';
import { Book } from '../../models/book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<string>();
  categories: string[] = [];
  activeCategory = 'All';
  isOpen = false;
  wishlist: Book[] = [];
  private wishlistSub!: Subscription;
  heartPulse = false; // ❤️ animation flag

  constructor(
    private bookService: BookService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.categories = ['All', ...this.bookService.getCategories()];
    this.loadWishlist();

    // ✅ Reactively update wishlist & trigger animation
    this.wishlistSub = this.wishlistService.wishlist$.subscribe((data) => {
      if (data.length > this.wishlist.length) {
        this.triggerHeartPulse();
      }
      this.wishlist = data;
    });
  }

  triggerHeartPulse(): void {
    this.heartPulse = true;
    setTimeout(() => (this.heartPulse = false), 700); // reset after pulse
  }

  selectCategory(cat: string): void {
    this.activeCategory = cat;
    this.categorySelected.emit(cat);
    this.closeSidebar();
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : 'auto';
  }

  loadWishlist(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(bookId: number): void {
    this.wishlistService.removeFromWishlist(bookId);
  }

  closeSidebar(): void {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeSidebar();
  }

  ngOnDestroy(): void {
    if (this.wishlistSub) this.wishlistSub.unsubscribe();
  }
}
