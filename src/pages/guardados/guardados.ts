import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';


@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _historialProvider:HistorialProvider) {
  }

  ionViewDidLoad() {
    this.historial = this._historialProvider.cargar_historial();
  }

}
