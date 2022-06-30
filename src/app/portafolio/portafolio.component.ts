import { Component, OnInit } from '@angular/core';
import { CvabastidasService } from '../services/cvabastidas.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(
    public cv: CvabastidasService
  ) { }

  ngOnInit(): void {
  }

}