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

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./app.component.css']
})

export class ListComponent extends AppComponent {}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./app.component.css']
})

export class AdminComponent extends AppComponent {}
