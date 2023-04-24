
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  public itens: string[] = ['Item1', 'Item2'];
  private activatedRoute = inject(ActivatedRoute);
  constructor(private toastController: ToastController) {}

  ngOnInit() {

  }

  
  contato(){
    return JSON.parse(<string>window.localStorage.getItem('contato')?.toString());
  }

  async openItem(parametro: string){
    const toast = await this.toastController.create({
      message: `Você clicou no item ${parametro}`,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }
}
