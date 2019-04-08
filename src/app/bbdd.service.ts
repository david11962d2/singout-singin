import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class BbddService {

  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>; // Reference to Student object, its an Observable too
  constructor(private db: AngularFireDatabase) { }


  AddStudent(student: Student) {
    this.studentsRef.push({
      nombre: student.nombre
    });
  }

  GetStudent(id: string) {
    this.studentRef = this.db.object('todos/' + id);
    return this.studentRef;
  }

  GetStudentsList() {
    this.studentsRef = this.db.list('/usuarios');
    return this.studentsRef;
  }

  UpdateStudent(student: Student) {
    this.studentRef.update({
      nombre: student.nombre
    });
  }
}
