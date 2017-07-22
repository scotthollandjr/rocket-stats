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

  addGoal(goals, key) {
    let newGoals = goals + 1;
    this.players.update(key, { goals: newGoals });
  }

  addWin(wins, key) {
    let newWins = wins + 1;
    this.players.update(key, { wins: newWins });
  }

  addGame(games, key) {
    let newGames = games + 1;
    this.players.update(key, { games: newGames });
  }
}
