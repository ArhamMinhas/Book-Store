import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: false,
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBarComponent {
  @Input() filteredCount: number = 0; // ✅ added for "X books found"
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  onSearchTermChange(): void {
    this.search.emit(this.searchTerm);
  }
}