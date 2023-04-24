import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private toast:ToastController,private router: Router) { }

  ngOnInit() {
  }

  async login(model:any){
    let email = model.form.controls.email.value;
    let password = model.form.controls.password.value;

    if(email !== 'teste@teste.com' || password !== '123456789'){
      const toast = await this.toast.create({
        message: 'Email e/ou Senha inválidos',
        duration: 2000
      });
      toast.present();
    }else{
      this.router.navigate(['/home']);
    }
  }
}
