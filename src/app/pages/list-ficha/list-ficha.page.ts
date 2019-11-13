import { Component, OnInit } from '@angular/core';
import { FichaService } from 'src/app/services/ficha.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-ficha',
  templateUrl: './list-ficha.page.html',
  styleUrls: ['./list-ficha.page.scss'],
})
export class ListFichaPage implements OnInit {

  protected ficha: any;

  constructor(
    public fichaService: FichaService,
    public alertController: AlertController
  ) { }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);}

    remover(key){
      this.fichaService.remove(key).then(
        res=>{
          this.presentAlert("Aviso", "Usuário Apagado")
        },
        err=>{
          this.presentAlert("Epa!","Erro ao Apagar");
        }
      )
    }

  ngOnInit() {
    this.ficha = this.fichaService.getAll();
  }

  async presentAlert(titulo:string, texto:string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }

}
