import { Component, signal } from '@angular/core';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';
import { CardComponent } from "../../components/card/card.component";


const client1 = {
  name: 'Felipe',
  gender: 'male',
  age: 34,
  address: 'Otawa, Canadá'
}
const client2 = {
  name: 'Izaskun',
  gender: 'female',
  age: 24,
  address: 'Toronto, Canadá'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }


  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1)
  }

  // i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Felipe',
    'Miren',
    'Ana',
    'Sonia',
    'Imanol',
    'Jon',
  ]);
  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Juan Carlos',
    age: 25,
    address: 'Otawa, Canadá',
  }


  // AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('Tenemos un error en los datos');
      resolve('Tenemos datos en la promesa.');
      console.log('Promesa finalizada');

    }, 3500);
  })


  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap', value))
  );

}
