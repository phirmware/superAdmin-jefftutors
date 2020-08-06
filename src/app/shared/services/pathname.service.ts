import { Injectable } from '@angular/core';
import { CoursesPaths, CustomersPaths } from '../interfaces/pathname-interface';

@Injectable({
  providedIn: 'root'
})
export class PathnameService {

  constructor() { }

  public readonly COURSES_PATH: CoursesPaths = {
    new: '/courses/new',
    list: '/courses/list',
    edit: '/courses/edit',
    course: '/courses/course'
  };

  public readonly CUSTOMERS_PATH: CustomersPaths = {
    list: '/customers/list',
    details: '/customers/customer',
  };
}
