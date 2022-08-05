import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorPageRoutingModule } from './calculator-page-routing.module';
import { CalculatorPageComponent } from './calculator-page.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    CalculatorPageComponent,
    Calculator1Component
  ],
  imports: [
    CommonModule,
    CalculatorPageRoutingModule,NbCardModule,
  ]
})
export class CalculatorPageModule { }
