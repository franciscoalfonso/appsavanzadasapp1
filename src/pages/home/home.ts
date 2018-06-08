import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';
//import { Cordova } from '@ionic-native/core';
import { HistorialProvider} from '../../providers/historial/historial'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
               private barcodeScanner: BarcodeScanner, 
               public toastCtrl: ToastController,
               private  platform: Platform,
               private _historialProvider: HistorialProvider) {

  }

  scan(){
    console.log("Realizando scan...");
    
    if (!this.platform.is('cordova')){

        this._historialProvider.agregar_historial("http://google.com");

    }
    
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error: ', err);
         this.presentToast('Error'+err);
     });

  }

  presentToast(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: 'Cordova no deseable',
      duration: 3000
    });

    toast.present();

  }

}