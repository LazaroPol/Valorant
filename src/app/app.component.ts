import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'valorant';
  buttonTitle:string = "Hide";
  visible:boolean = true;
  showhideUtility(){
    this.visible = this.visible?false:true;
    this.buttonTitle = this.visible?"Hide":"Show";
  }
}
