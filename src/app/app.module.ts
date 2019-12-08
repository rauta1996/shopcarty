import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopicsComponent } from './topics/topics.component';
import { FeedsComponent } from './feeds/feeds.component';
import { NotificationComponent } from './notification/notification.component';
import { FeedsViewComponent } from './feeds-view/feeds-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopicsComponent,
    FeedsComponent,
    NotificationComponent,
    FeedsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
