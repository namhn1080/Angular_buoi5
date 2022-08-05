import { Component, OnInit } from '@angular/core';
import { CaculatorService } from '../../../service/calculator.service'

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.scss']
})
export class Calculator1Component implements OnInit {
  constructor(public CaculatorService: CaculatorService) {}
  
  ngOnInit(): void {
  
  }
}
