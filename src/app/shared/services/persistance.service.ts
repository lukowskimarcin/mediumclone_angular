import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class PersistanceService {
  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (ex) {
      console.error('Error saving to local storage', ex)
    }
  }

  get(key: string): unknown {
    try {
      const localStorageItem = localStorage.getItem(key)
      return localStorageItem ? JSON.parse(localStorageItem) : null
    } catch (ex) {
      console.error('Error getting from local storage', ex)
      return null
    }
  }
}
