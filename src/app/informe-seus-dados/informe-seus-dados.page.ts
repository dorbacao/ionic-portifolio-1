import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-informe-seus-dados',
  templateUrl: './informe-seus-dados.page.html',
  styleUrls: ['./informe-seus-dados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class InformeSeusDadosPage implements OnInit {
  constructor(private alertController: AlertController) {
  }
  
  async ngOnInit() {

  }

  async okClicked(model:any){
    let nome = model[0];
    let telefone = model[1];
    let contato = {nome:nome, telefone:telefone};
    window.localStorage.setItem('contato',JSON.stringify(contato));
  }


  async abrirAlerta() {

    let alert = this.alertController.create({
      message:'Informe Seus Dados',
      inputs:[
        { placeholder: 'Email' },
        { placeholder: 'Telefone' },    
      ],
      buttons:[
        {
          text:'Cancelar'
        },
        {
          text:'Enviar',
          handler: this.okClicked
        }        
      ]
    });

    (await alert).present();
  }

  async setOpen() {

    alert('Teste');

  }
}


