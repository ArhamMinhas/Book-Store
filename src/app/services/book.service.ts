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
  },
 {
  id: 5,
  title: 'Rich Dad Poor Dad',
  author: 'Robert Kiyosaki',
  category: 'Business',
  price: 18.99,
  image: 'assets/images/rich-dad.jpg',
  description: 'Learn how to make your money work for you through mindset and financial literacy.'
},
{
  id: 6,
  title: 'The Lean Startup',
  author: 'Eric Ries',
  category: 'Business',
  price: 21.50,
  image: 'assets/images/The-Lean-Startup.jpg',
  description: 'A guide to building successful startups using lean methodology.'
},
{
  id: 7,
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  category: 'Psychology',
  price: 19.75,
  image: 'assets/images/thinking-fast.jpg',
  description: 'Explores the two systems that drive the way we think and make decisions.'
},
{
  id: 8,
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  category: 'Fiction',
  price: 13.99,
  image: 'assets/images/alchemist.jpg',
  description: 'A young shepherd’s journey to fulfill his personal legend and dreams.'
},
{
  id: 9,
  title: 'Deep Work',
  author: 'Cal Newport',
  category: 'Self-Help',
  price: 16.25,
  image: 'assets/images/deep-work.jpg',
  description: 'Rules for focused success in a distracted world.'
},
{
  id: 10,
  title: '1984',
  author: 'George Orwell',
  category: 'Fiction',
  price: 14.49,
  image: 'assets/images/1984.jpg',
  description: 'A dystopian story exploring totalitarianism and mass surveillance.'
},
{
  id: 11,
  title: 'Sapiens: A Brief History of Humankind',
  author: 'Yuval Noah Harari',
  category: 'History',
  price: 22.99,
  image: 'assets/images/sapiens.jpg',
  description: 'A fascinating look into the history and evolution of Homo sapiens.'
},
{
  id: 12,
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt & David Thomas',
  category: 'Programming',
  price: 31.00,
  image: 'assets/images/pragmetic-programmer.jpg',
  description: 'Timeless principles and best practices for professional software developers.'
},
{
  id: 13,
  title: 'Cracking the Coding Interview',
  author: 'Gayle Laakmann McDowell',
  category: 'Programming',
  price: 34.99,
  image: 'assets/images/cracking-code.webp',
  description: 'Comprehensive preparation for coding interviews with top tech companies.'
},
{
  id: 14,
  title: 'The Subtle Art of Not Giving a F*ck',
  author: 'Mark Manson',
  category: 'Self-Help',
  price: 17.99,
  image: 'assets/images/OIP.jpeg',
  description: 'A counterintuitive approach to living a better life by caring less.'
},
{
  id: 15,
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  category: 'Fiction',
  price: 13.50,
  image: 'assets/images/to-kill-a-mockingbird.jpg',
  description: 'A timeless novel of racial injustice and moral growth in the American South.'
},
{
  id: 16,
  title: 'Start With Why',
  author: 'Simon Sinek',
  category: 'Business',
  price: 19.25,
  image: 'assets/images/start-with-why.jpg',
  description: 'How great leaders inspire others by starting with a clear sense of purpose.'
},
{
  id: 17,
  title: 'The Art of War',
  author: 'Sun Tzu',
  category: 'History',
  price: 11.99,
  image: 'assets/images/art-of-war.jpg',
  description: 'Ancient strategies for success in war and life, still relevant today.'
},
{
  id: 18,
  title: 'Hooked: How to Build Habit-Forming Products',
  author: 'Nir Eyal',
  category: 'Business',
  price: 20.49,
  image: 'assets/images/OIP 2.jpeg',
  description: 'Explains the psychology behind habit-forming digital products.'
},
{
  id: 19,
  title: 'Brief Answers to the Big Questions',
  author: 'Stephen Hawking',
  category: 'Science',
  price: 18.75,
  image: 'assets/images/OIP 3.jpeg',
  description: 'Hawking’s final thoughts on the universe, humanity, and the future.'
},
{
  id: 20,
  title: 'A Brief History of Time',
  author: 'Stephen Hawking',
  category: 'Science',
  price: 17.50,
  image: 'assets/images/breif history.jpg',
  description: 'Explains complex cosmology concepts in accessible terms for everyone.'
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
