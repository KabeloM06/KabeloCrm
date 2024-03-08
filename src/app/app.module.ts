import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TicketPageComponent } from './pages/ticket-page/ticket-page.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { StatusDisplayComponent } from './components/status-display/status-display.component';
import { ProgressDisplayComponent } from './components/progress-display/progress-display.component';
import { NavComponent } from './components/nav/nav.component';
import { DeleteBlockComponent } from './components/delete-block/delete-block.component';
import { AvatarDisplayComponent } from './components/avatar-display/avatar-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketPageComponent,
    TicketCardComponent,
    StatusDisplayComponent,
    ProgressDisplayComponent,
    NavComponent,
    DeleteBlockComponent,
    AvatarDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
