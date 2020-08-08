import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-access-token': `${this.storageService.getStorageToken()}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          // server side error
          throw new Error('Something went wrong, Try again or contact the techie @ phirmware 😁');
        } else {
          // client side error
          throw new Error('Something went wrong with the application, refresh and try again');
        }
      }),
    );
  }
}
