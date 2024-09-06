import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    const hamburguer = document.querySelector('.hamburguer');

    const nav = document.querySelector('.nav');

    hamburguer?.addEventListener('click', () =>
      nav?.classList.toggle('active')
    );
  }
}
