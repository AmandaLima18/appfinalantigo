import { Component, OnInit } from '@angular/core';


import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(

  
    public alert: AlertController,
    private router: Router,
  ) { }

  ngOnInit() { }

  login() {
  
      (data) => {

        // Feedback
        this.feedback(data.user);
      }
  
  }

   // Popup de feedback
   async feedback(user:  any) {

    const alert = await this.alert.create({
      header: `Olá ${user.displayName}!`,
      message: 'Você já pode acessar o conteúdo exclusivo do aplicativo.',
      buttons : [

        // Botão [Ok]
        {
          text: 'Ok',
          handler: () => {

            // Redireciona para   'inicio'
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
