import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { P1Page } from '../p1/p1';
import { P2Page } from '../p2/p2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  page1=P1Page;
  page2=P2Page;

  constructor(public navCtrl: NavController) {

  }
  click1(){
    this.navCtrl.push(this.page1);
  }
  click2(){
    this.navCtrl.push(this.page2);
  }
}
