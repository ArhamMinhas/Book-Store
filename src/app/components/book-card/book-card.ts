import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-card',
  standalone: false,
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCardComponent implements OnInit, OnDestroy {
  @Input() book!: Book;
  isWishlisted = false;
  private wishlistSub!: Subscription;

  constructor(
    private router: Router,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.isWishlisted = this.wishlistService.isInWishlist(this.book.id);

    // ✅ Reactively update card state
    this.wishlistSub = this.wishlistService.wishlist$.subscribe(() => {
      this.isWishlisted = this.wishlistService.isInWishlist(this.book.id);
    });
  }

  viewDetails(): void {
    this.router.navigate(['/book', this.book.id]);
  }

  toggleWishlist(event: MouseEvent): void {
    event.stopPropagation();

    if (this.isWishlisted) {
      this.wishlistService.removeFromWishlist(this.book.id);
    } else {
      this.wishlistService.addToWishlist(this.book);
    }

    this.isWishlisted = !this.isWishlisted;
  }

  ngOnDestroy(): void {
    if (this.wishlistSub) this.wishlistSub.unsubscribe();
  }
}
