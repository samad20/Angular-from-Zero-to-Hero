import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;
    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      if (i > 0 && this.isPrepositions(words[i]))
        words[i] = words[i].toLowerCase();
      else {
        words[i] = this.toTitleCase(words[i]);
      }
    }
    return words.join(' ');
  }
  private toTitleCase(words: string): string {
    return (
      words.substring(0, 1).toUpperCase() + words.substring(1).toLowerCase()
    );
  }
  private isPrepositions(words: string): boolean {
    let prepositions = ['of', 'the'];
    return prepositions.includes(words.toLowerCase());
  }
}
