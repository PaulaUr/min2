import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Subjects} from "../../app/subject";

/**
 * Generated class for the SubFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
  pure: true
})
@Injectable()
export class SubFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Subjects[], term: string, bachelor: string): any {
    if(term){
      term = term.toUpperCase();
      return value.filter(item => {
        return item.name.toUpperCase().indexOf(term) !== -1
      });
    }
    if(bachelor){
      console.log(bachelor);
      return value.filter(item =>
        item.titulacion === bachelor);
    }
    else {
      return value;
    }

  }
}
