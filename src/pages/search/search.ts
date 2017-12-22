import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import {Subjects} from '../../app/subject';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  subjects: Subjects[];
  bachelor: string;
 // searchQuery: string = '';
  //searchControl: FormControl;
  testCheckboxOpen: boolean;
  tResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public service: ServiceProvider) {
  }

  ionViewDidLoad() {
   // this.getSubjects();

    console.log('ionViewDidLoad SearchPage');
  }
 /* getSubjects(){
    console.log(this.bachelor);
    this.service.searchByBachelor(this.bachelor)
      .subscribe(
        data => {
          console.log(data);
          this.subjects = data},
        err => {
          console.log('error');
        }
      );

  }*/

  bachSelect(ev:any){
    console.log(ev);
    this.service.searchByBachelor(ev)
      .subscribe(
        data => {
          console.log(data);
          this.subjects = data},
        err => {
          console.log('error');
        }
      );
   // this.bachelor = ev;
    console.log(ev);
   // console.log(this.bachelor);
  }
  semSelect(ev:any){
    console.log(ev);
    this.service.searchBySemester(ev)
      .subscribe(
        data => {
          console.log(data);
          this.subjects = data},
        err => {
          console.log('error');
        }
      );
    // this.bachelor = ev;
    console.log(ev);

  }



  initializeItems(){
   // this.items = this.subjects;
    //console.log('Inicializar:',this.items);
  }


}
