import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralSingular',
})
export class PluralSingularPipe implements PipeTransform {
  transform(number: number, singularText: string, pluralText?: string): string {
    const pluralWord = pluralText ? pluralText : `${singularText}s`;
    return number > 1 || number === 0
      ? `${number} ${pluralWord}`
      : `${number} ${singularText}`;
  }
}
