import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.players = db.list('/players');
  }

  add(type, player) {
    let suckit = player[type] + 1;
    this.players.update(player.$key, { [type]: suckit });
  }
}
