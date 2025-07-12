import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  private URL = 'http://127.0.0.1:8000/api/teachers';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Teacher[]>(this.URL);
  }

  getById(id: number) {
    return this.http.get<Teacher>(`${this.URL}/${id}`);
  }

  addTeacher(data: Teacher) {
    return this.http.post<Teacher>(this.URL, data);
  }

  updateTeacher(data: Teacher, id: number) {
    return this.http.put<Teacher>(`${this.URL}/${id}`, data);
  }

  deleteTeacher(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}

