import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Students_Mock } from 'src/mocks/student.mock';
import { Student } from '../../models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private apiUrl = 'http://localhost:9428/students/';
  private studentList: Student[] = [];

  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
  
  getAll(): Student[] {
    return this.students;
  }

  public find(ident: number): Student{
      return Students_Mock.find(({ id }) => id == ident);
  }

  public students: Student[] = [];

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<Student> {
    const student = this.students.find(s => s.id === id);
    return of(student);
  }
}
