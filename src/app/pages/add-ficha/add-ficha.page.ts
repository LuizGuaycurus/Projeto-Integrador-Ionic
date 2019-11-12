import { Component, OnInit } from '@angular/core';
import { Ficha } from 'src/app/model/ficha';
import { Router, ActivatedRoute } from '@angular/router';
import { FichaService } from 'src/app/services/ficha.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-ficha',
  templateUrl: './add-ficha.page.html',
  styleUrls: ['./add-ficha.page.scss'],
})
export class AddFichaPage implements OnInit {

  constructor( public router: Router, public alertController: AlertController, public activeRouter: ActivatedRoute, public fichaService: FichaService,
  ) { }

  public key: string;
  public ficha: Ficha;
  

  ngOnInit() {
    this.ficha = new Ficha;
    this.key = this.activeRouter.snapshot.paramMap.get("key");
    if (this.key) {
      this.fichaService.get(this.key).subscribe(
        res =>{
         this.ficha = res
        },  
        err => this.key = null
      );
    }
  }


    onSubmit(form) {
      if (form.valid) {
        if (!this.key) {
          //console.log("Cadastrado", this.usuario );
          // then é como um então, tem dois resultados , um verdadeiro e um falso
          this.fichaService.save(this.ficha).then(
            res => {
              this.presentAlert("Aviso", "Cadastrado");
              form.reset();
              this.router.navigate(['/']);
            },
            err => {
              this.presentAlert("Epa!", "Erro ao Cadastrar");
            }
          )
        } else {
          this.fichaService.update(this.ficha, this.key)
            .then(
              res => {
                this.presentAlert("Aviso", "Atualizado!");
                form.reset();
                this.router.navigate(['/']);
              },
              err => {
                this.presentAlert("Epa!", "Erro ao atualizar!");
              }
            ).catch(
              err => {
                this.presentAlert("Erro!", "Ao acessar ao sistema!");
                this.router.navigate(['/']);
              }
            )
        }
      }
    }

    async presentAlert(titulo: string, texto: string) {
      const alert = await this.alertController.create({
        header: titulo,
        //subHeader: 'Subtitle',
        message: texto,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }


