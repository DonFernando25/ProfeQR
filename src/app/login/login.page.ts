import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  nombreUsuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  login() {
    
    if (this.nombreUsuario === 'profesor123' && this.contrasena === '1234') {
      localStorage.setItem('profesor', this.nombreUsuario);
      this.router.navigate(['/generar-qr']); 
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
