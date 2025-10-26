import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: false,
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBarComponent {
  @Input() categories: string[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();

  searchTerm: string = '';
  selectedCategory: string = 'All';

  onSearchTermChange(): void {
    this.search.emit(this.searchTerm);
  }

  onCategorySelected(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.categoryChange.emit(select.value);
  }
}