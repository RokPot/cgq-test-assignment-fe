import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'numberShortener',
})
export class NumberShortenerPipe implements PipeTransform {
  transform(value?: number): string {
    if (value == null) return '-';
    if (value > 1000) {
      return `${Math.floor(value / 1000)}K`;
    }
    return `${value}`;
  }
}
