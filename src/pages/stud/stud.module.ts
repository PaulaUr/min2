import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudPage } from './stud';

@NgModule({
  declarations: [
    StudPage,
  ],
  imports: [
    IonicPageModule.forChild(StudPage),
  ],
})
export class StudPageModule {}
