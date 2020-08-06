import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private static readonly ADMIN_TOKEN_KEY = 'token';
  private static readonly storage = localStorage;

  constructor() { }

  public getStorageToken(): string {
    return StorageService.storage.getItem(StorageService.ADMIN_TOKEN_KEY);
  }

  public setStorageToken(token: Token) {
    StorageService.storage.setItem(StorageService.ADMIN_TOKEN_KEY, token.token);
  }

  public removeStorageToken() {
    StorageService.storage.removeItem(StorageService.ADMIN_TOKEN_KEY);
  }
}
