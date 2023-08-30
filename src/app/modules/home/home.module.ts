import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { SharedModule } from '@shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
