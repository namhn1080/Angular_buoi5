import { Component, OnInit } from '@angular/core';
import { ArcticlesService } from 'src/app/service/arcticles.service';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss']
})
export class CalculatorPageComponent implements OnInit {

  constructor(private arcticlesService:ArcticlesService) { }
  arc:any []=[];
  articles:any []=[];
  
  
 
  
    ngOnInit(): void {
    this.arcticlesService.getPa(1,10).subscribe((data) => {this.arc.length=0
    for(let arc of data){
      this.arc.push(arc);
      console.log(arc)
    }
    console.log(this.arc.length)
    
  });
}
}
