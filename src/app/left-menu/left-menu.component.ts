import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  LineUps:boolean=true;
  Mapas:boolean=true;
  Aim:boolean=true;

  LineUpsFunction(){
      this.LineUps=true;
      this.Mapas=false;
      this.Aim=false
  }

  MapasFunction(){
      this.Mapas=true;
      this.LineUps=false;
      this.Aim=false
  }

  AimFunction(){
      this.Aim=true;
      this.Mapas=false;
      this.LineUps=false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
