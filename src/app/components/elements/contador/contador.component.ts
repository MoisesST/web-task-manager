import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  standalone: true
})

export class ContadorComponent {
  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}
