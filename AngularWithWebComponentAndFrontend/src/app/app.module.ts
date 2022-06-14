import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicrofrontendOneComponent } from './microfrontend-one/microfrontend-one.component';
import { MicrofrontendThreeComponent } from './microfrontend-three/microfrontend-three.component';
import { MicrofrontendTwoComponent } from './microfrontend-two/microfrontend-two.component';


@NgModule({
  declarations: [
    AppComponent,
    MicrofrontendOneComponent,
    MicrofrontendThreeComponent,
    MicrofrontendTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
