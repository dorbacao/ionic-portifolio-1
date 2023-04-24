import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthGuardService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  providers:[AuthGuardService],
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'heart' },
    { title: 'Home', url: '/home', icon: 'newspaper' },
    { title: 'Informe seus Dados', url: '/informe-seus-dados', icon: 'paper-plane' },
    { title: 'Badges', url: '/badge', icon: 'image' },
    
  ];
  
  public labels = [];

  contato(){
    return JSON.parse(<string>window.localStorage.getItem('contato')?.toString());
  }

  constructor() {

  }
}
