import { Pipe, type PipeTransform } from '@angular/core';

type CanFly = 'Puede volar' | 'No puede volar'


@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): CanFly {
    return value ? 'Puede volar' : 'No puede volar';
  }

}
