import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { ServiceProvider } from '../../providers/service/service';
import {Subjects} from '../../app/subject';

/**
 * Generated class for the SubjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subj',
  templateUrl: 'subj.html',
})
export class SubjPage {
  subjects: Subjects[];
  term: string= '';
  cantidad = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
  }
  getSubjects(){
    this.service.getSubjects()
      .subscribe(
        data => {
          console.log(data);
          this.subjects = data},
        err => {
          console.log('error');
        }
      );
  }
  itemSelected(item){
    this.navCtrl.push(DetailsPage, {item: item});
   // this.navCtrl.push(SearchPage, {item: item});
  }
  searchSubj(ev){
    this.term = ev.target.value;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjPage');
    this.getSubjects();
  }

}
