import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ListComponent } from './app.component';
import { AdminComponent } from './app.component';

import { Ranker } from './pipes/ranker.pipe';
import { Top } from './pipes/top.pipe';
import { StatsPerGame } from './pipes/stats-per-game.pipe';
import { WinPercentage } from './pipes/win-percentage.pipe';

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AdminComponent,
    Ranker,
    Top,
    StatsPerGame,
    WinPercentage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
