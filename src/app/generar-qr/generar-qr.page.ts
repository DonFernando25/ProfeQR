import { Component, OnInit } from '@angular/core';
// @ts-ignore
import QRCode from 'qrcode';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage implements OnInit {
  profesor: string = 'profesor123'; // Por defecto

  constructor() {}

  ngOnInit() {
    // Recupera el nombre del profesor del localStorage
    const nombreUsuario = localStorage.getItem('profesor');
    if (nombreUsuario) {
      this.profesor = nombreUsuario;
    }
  }

  generarQR() {
    const data = `${this.profesor},Matemáticas`; // Contenido del QR
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;

    QRCode.toCanvas(canvas, data, { width: 200 }, (error: Error | null) => {
      if (error) {
        console.error(error);
        alert('Error al generar el QR');
      } else {
        console.log('QR generado con éxito');
      }
    });
  }
}
