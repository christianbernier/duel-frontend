import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify',
})
export class StringifyPipe implements PipeTransform {
  transform(object: object | null): string {
    if (object === null) {
      return 'null';
    }
    return JSON.stringify(object);
  }
}
