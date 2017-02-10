import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'mealsplan',
  templateUrl: 'mealsplan.html'
})
export class Mealsplan {

  public swipe: number = 0;

  constructor(public navCtrl: NavController) {
    
  }

  swipeEvent(e) {


    if(e.direction == 1) {
      // Left
      alert('left');
    } else {
      alert('right');
    }
    this.swipe++
  }

}