import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";
import { GarantiaComponent } from "./components/garantia/garantia.component";
import { AboutConteudoComponent } from "./components/about-conteudo/about-conteudo.component";
import { AboutEleComponent } from "./components/about-ele/about-ele.component";
import { OfertaComponent } from "./components/oferta/oferta.component";
import { CompreComponent } from "./components/compre/compre.component";
import { CarrosselComponent } from "./components/carrossel/carrossel.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroBannerComponent, GarantiaComponent, AboutConteudoComponent, AboutEleComponent, OfertaComponent, CompreComponent, CarrosselComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tecnicasSEO';
}
