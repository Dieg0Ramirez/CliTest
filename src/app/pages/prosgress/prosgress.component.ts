import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prosgress',
  templateUrl: './prosgress.component.html',
  styles: []
})
export class ProsgressComponent implements OnInit {

  progreso1:number =20;
  progreso2:number =30;
  constructor() { }

  ngOnInit() {
  }


  // cambiarValor(valor:number){

  //   if(this.progreso >=100 && valor > 0){
  //   this.progreso =100;
  //     return;
  //   }
  //   if(this.progreso <= 0 && valor <=0){

  //   this.progreso =0;
  //     return;
  //   }

  //   this.progreso = this.progreso + valor;
  // }

  
  // actualizar( event:number){
  //   console.log('Evento',event);
  //   this.progreso1=event;
  // }
}
