import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import { HttpHeaders } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class TeacherService {
  //private URL = 'http://172.20.10.5:8000/api/v1/teachers';

  private URL = "https://fbd847acbd3e.ngrok-free.app/api/v1/teachers";


  constructor(private http: HttpClient) {}


  private headers = new HttpHeaders({
    'ngrok-skip-browser-warning': 'true'
  });

  getAll() {
    return this.http.get<Teacher[]>(this.URL, { headers: this.headers });
  }

  getById(id: number) {
    return this.http.get<Teacher>(`${this.URL}/${id}`, { headers: this.headers });
  }

  addTeacher(data: Teacher) {
    return this.http.post<Teacher>(this.URL, data, { headers: this.headers });
  }

  updateTeacher(data: Teacher, id: number) {
    return this.http.put<Teacher>(`${this.URL}/${id}`, data, { headers: this.headers });
  }

  deleteTeacher(id: number) {
    return this.http.delete(`${this.URL}/${id}`, { headers: this.headers });
  }
}

