import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
  standalone: true,
})
export class TrimPipe implements PipeTransform {

  transform(value: string): string {
    return typeof value === 'string'
      ? value.trim()
      : value;
  }

}
