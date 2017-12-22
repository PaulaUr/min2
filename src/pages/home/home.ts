import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subjects } from '../../app/subject';
import { SearchPage } from '../search/search';
import { SubjPage } from '../subj/subj';
import { StudPage } from '../stud/stud';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subjects: Subjects[];

  constructor(public navCtrl: NavController) {
  }
  openSubj(){
  this.navCtrl.push(SubjPage);
  }
  openStud(){
    this.navCtrl.push(StudPage);
  }
  openSearch(){
    this.navCtrl.push(SearchPage);
  }
  openEnrolment(){
    this.navCtrl.push(LoginPage);
  }
 /* ionViewDidLoad(){
    this.service.getSubjects()
      .subscribe(
        data => {
          console.log(data);
          this.subjects = data},
        err => {
          console.log('error');
        }
      );
  }*/


}
