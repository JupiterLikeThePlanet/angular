import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ServiceComponent } from './service/service.component';
import { ServersComponent } from './servers/servers.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServiceComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
