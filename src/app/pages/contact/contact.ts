import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  exito = false;

  constructor(private router: Router) {}

  enviar(form: any) {

    if (form.invalid) {
      return;
    }

    this.exito = true;

    setTimeout(() => {
      this.exito = false;     // ← desaparece mensaje
      this.router.navigate(['/']);
    }, 2000);
  }
}
