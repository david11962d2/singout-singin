import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { BbddService } from './bbdd.service';

import { Observable } from 'rxjs/Observable';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { from } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Student } from './student';


@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  email: string;
  password: string;
  Student: Student[];

  constructor(public authService: AuthService, public bd: BbddService) {

  }

  ngOnInit() {
    // this.dataState();
    let s = this.bd.GetStudentsList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Student = [];
      // data.forEach(item => {
      //   let a = item.payload.toJSON();
      //   // tslint:disable-next-line:no-string-literal
      //   a['$key'] = item.key;
      //   this.Student.push(a as Student);
      // });
    });
  }

  // dataState() {
  //   this.bd.GetStudentsList().valueChanges().subscribe(data => {
  //     this.preLoader = false;
  //     if (data.length <= 0) {
  //       this.hideWhenNoStudent = false;
  //       this.noData = true;
  //     } else {
  //       this.hideWhenNoStudent = true;
  //       this.noData = false;
  //     }
  //   });
  // }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}
