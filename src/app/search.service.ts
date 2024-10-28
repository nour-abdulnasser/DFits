import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private searchTermSource = new BehaviorSubject<string|null>('');
  searchTerm$ = this.searchTermSource.asObservable();
 
  /**
   * Update the search term for the application
   * @param term - new search term. If null, then the search bar will be cleared.
   */
  updateSearchTerm(term:string | null) {
    this.searchTermSource.next(term);
  }
}
