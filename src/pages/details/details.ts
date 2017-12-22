import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subjects } from '../../app/subject';
import { Student } from '../../app/student';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  item;
  subjects: Subjects[];
  student: Student[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.item = navParams.data.item;
    this.subjects = navParams.data.item;
    console.log(this.subjects);
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
