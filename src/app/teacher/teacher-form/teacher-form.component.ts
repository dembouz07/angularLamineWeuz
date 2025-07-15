import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
  id!: number;
  submitted = false;

  teacherForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    speciality: new FormControl('', [Validators.required]),
    hiring_date: new FormControl('', [Validators.required])
  });

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = +this.route.snapshot.params['id'];
      this.getById(this.id);
    }
  }

  getById(id: number) {
    this.teacherService.getById(id).subscribe(
      (data: Teacher) => {
        this.teacherForm.patchValue(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get f() {
    return this.teacherForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.teacherForm.valid) {
      if (this.id) {
        this.teacherService.updateTeacher(this.teacherForm.value, this.id).subscribe(
          () => {
            console.log("Modifié avec succès");
            this.router.navigateByUrl('/teachers');
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.teacherService.addTeacher(this.teacherForm.value).subscribe(
          () => {
            console.log("Créé avec succès");
            this.router.navigateByUrl('/teachers');
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
  }
}
