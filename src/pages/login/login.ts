import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Subjects} from "../../app/subject";
import {ServiceProvider} from "../../providers/service/service";
import 'rxjs/add/operator/switchMap';
import {DetailsPage} from "../details/details";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  subjects: Subjects[];
  su: Subjects;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCrtl: AlertController, public service: ServiceProvider) {
  this.su = new Subjects();
  }

  ionViewDidLoad() {
    this.getSubjects();
    console.log('ionViewDidLoad LoginPage');
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
  itemSelected(s: Subjects){
    //this.navCtrl.push(DetailsPage, {item: item});
    console.log(s);
    let alert = this.alertCrtl.create({
      title: 'Do you enrolment in this subject?',
      message: 'Write your name',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'nombre'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            s.student = data.nombre;
            this.service.update(s);

            //  data.nombre = this.subjects.push()
            console.log('Saved clicked', data.nombre);
            console.log('Nombrepassed', s.student);

          }
        }
      ]
    });
    alert.present();
    // this.navCtrl.push(SearchPage, {item: item});
  }

 /* doPrompt(s: Subjects){
    let nombre: string;
    let alert = this.alertCrtl.create({
      title: 'Do you enrolment in this subject?',
      message: 'Write your name',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'nombre'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            nombre = data.nombre;
            console.log('Saved clicked', data.nombre);
            console.log('Nombrepassed', nombre);
            this.service.update(nombre);
          }
        }
      ]
    });
    alert.present();

  }*/

  /*itemSelected(item){
    this.navCtrl.push(DetailsPage, {item: item});
    console.log(p);
    this.service.update(p)
      .then(() => this.goBack());
  }
    // this.navCtrl.push(SearchPage, {item: item});
  }*/

}
