import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  // getAll(): void {
  //   this.teacherService.getAll().subscribe(
  //     data => this.teachers = data,
  //     error => console.error(error)
  //   );
  // }

  //  getAll(): void {
  //   this.teacherService.getAll().subscribe(
  //     data => {
  //       console.log('Données reçues depuis l’API :', data);
  //       this.teachers = data;
  //     },
  //     error => {
  //       console.error('Erreur lors du chargement des enseignants :', error);
  //     }
  //   );
  // }

  getAll(): void {
    this.teacherService.getAll().subscribe(
      (data:Teacher[]) => {
        console.log('Données reçues depuis l’API :', data);
        this.teachers = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des enseignants :', error);
      });
  }

  deleteTeacher(id: number): void {
    this.teacherService.deleteTeacher(id).subscribe(
      () => this.getAll(),
      error => console.error(error)
    );
  }
}
