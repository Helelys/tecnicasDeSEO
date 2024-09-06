import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css',
})
export class CarrosselComponent implements OnInit {
  ngOnInit(): void {
    const acordeon = document.querySelectorAll('.acordeon');

    acordeon.forEach((acordeon) => {
      acordeon.addEventListener('click', () => {
        const body = acordeon.querySelector('.acordeon-body');
        body?.classList.toggle('active');
      });
    });
  }
}
