import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { heroes } from '../../data/heroes.data';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, HeroCreatorPipe, TitleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Asier Zabala');
  upperCase = signal(true);

  changeCase() {
    this.upperCase.set(!this.upperCase());
    console.log(this.upperCase());

  }

  heroes = signal(heroes);


}
