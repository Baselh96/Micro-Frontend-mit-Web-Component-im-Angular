import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microfrontend-one',
  templateUrl: './microfrontend-one.component.html',
  styleUrls: ['./microfrontend-one.component.scss']
})
export class MicrofrontendOneComponent implements OnInit {

  constructor() { }

  microfrontendOneEvent(event:any){
    console.log(event.detail);
  }

  ngOnInit(): void { }

}
