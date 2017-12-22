import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Student } from '../../app/student';


@IonicPage()
@Component({
  selector: 'page-stud',
  templateUrl: 'stud.html',
})
export class StudPage {
  students: Student[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.getStudents();
    console.log('ionViewDidLoad StudPage');
  }

  getStudents(){
    this.service.getStudents()
      .subscribe(
        data => {
          console.log(data);
          this.students = data},
        err => {
          console.log('error');
        }
      );
  }

}
