import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  titulo = "Bienvenido al curso <3"
  contador = 0
  imagen ="https://dummyimage.com/300"

  constructor(){
    setInterval(() =>{
      this.contador++
    },2000)
}
resetearContador(){
  this.contador=0
}

}
