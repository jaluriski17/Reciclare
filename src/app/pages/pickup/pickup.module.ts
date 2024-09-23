import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PikupPageRoutingModule } from './pickup-routing.module';

import { PikupPage } from './pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PikupPageRoutingModule
  ],
  declarations: [PikupPage]
})
export class PikupPageModule {}
