import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { CalculatorPageComponent } from './Pages/calculator-page/calculator-page.component';
import { ArcticlesService } from './service/arcticles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'calculator';
  constructor(private sidebarService: NbSidebarService, private arc: ArcticlesService) {
  }
  ngOnInit(): void {
    this.arc.getPa(1,2);
    
  }
  
}
