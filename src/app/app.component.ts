import { Component } from '@angular/core';

import { Consumidor } from './models/consumidor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  consumidorArray: Consumidor[] = [
    {id: 1, name: "Ryan", country: "USA"},
    {id: 2, name: "Angelica", country:"USA"},
    {id: 3, name: "Joe", country: "USA"},
  ];

  selectedConsumidor:Consumidor = new Consumidor();

  openForEdit(consumidor: Consumidor){
    this.selectedConsumidor = consumidor;
  }

  addOrEdit(){
    if(this.selectedConsumidor.id === 0){
      this.selectedConsumidor.id = this.consumidorArray.length + 1;
      this.consumidorArray.push(this.selectedConsumidor);
    }

    this.selectedConsumidor = new Consumidor();
  }

  delete() {
    if(confirm('Tem certeza que deseja deletar?'))
    this.consumidorArray = this.consumidorArray.filter(x => x != this.selectedConsumidor);
    this.selectedConsumidor = new Consumidor();
  }
}


  

