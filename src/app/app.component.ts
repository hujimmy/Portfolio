import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showNav: boolean;
  constructor(public nav: NavbarService) {}
  ngOnInit() {
    AOS.init();
    this.nav.visible$.subscribe((data) => {
      this.showNav = data;
    });
  }
}
