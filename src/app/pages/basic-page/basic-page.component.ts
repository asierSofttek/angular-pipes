import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';


@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {


  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));


  nameLower = signal('Asier');
  nameUpper = signal('ASIER');
  fullName = signal('AsiEr zABalA');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());

    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    })
  })

  changeLocale(locale: AvailableLocale) {
    console.log(locale);

    this.localeService.changeLocale(locale)
  }
}
