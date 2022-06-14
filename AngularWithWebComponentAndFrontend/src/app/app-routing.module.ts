import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicrofrontendOneComponent } from './microfrontend-one/microfrontend-one.component';
import { MicrofrontendTwoComponent } from './microfrontend-two/microfrontend-two.component';
import { MicrofrontendThreeComponent } from './microfrontend-three/microfrontend-three.component';

const routes: Routes = [
 // {path: '', redirectTo: '/microfrontendOne', pathMatch: 'full' },
  {path: 'microfrontendOne', component: MicrofrontendOneComponent},
  {path: 'microfrontendTwo', component: MicrofrontendTwoComponent},
  {path: 'microfrontendThree', component: MicrofrontendThreeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
