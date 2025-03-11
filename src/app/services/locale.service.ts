import { Injectable, signal } from '@angular/core';


export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentlocale = signal<AvailableLocale>('fr');

  constructor() {
    this.currentlocale.set(
      localStorage.getItem('locale') as AvailableLocale ?? 'es'
    )
  }

  get getLocale() {
    return this.currentlocale();
  }

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentlocale.set(locale);
    window.location.reload();
  }
}
