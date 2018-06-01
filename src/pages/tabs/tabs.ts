import { Component } from '@angular/core';

import { GuardadosPage } from '../guardados/guardados';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GuardadosPage;


  constructor() {

  }
}
