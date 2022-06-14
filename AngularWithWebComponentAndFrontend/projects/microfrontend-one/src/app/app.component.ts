import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //Hiermit kann man die erste Attribut zu handhaben
  @Input() attribute: any;
  //Hiermit kann man die zweite Attribut durch Local- bwz.Session Storage zu handhaben
  attribute2 = localStorage.getItem("attribut2");

  //CustomEvent
  @Output() myEvent: any = new EventEmitter();


  ngOnInit() {
    console.log(this.attribute);
    console.log(this.attribute2);
    /*
    //Kommunikation von MF1 zu Shell durch CustomEvent
    this.myEvent.emit('Testevent zum Austauschen der Daten von MF1 zu Shell.');
    
    //Kommunikation durch WindowsEvent
    postMessage('this is a test message for WindowsEvent');
   

    //Kommunikation durch BroadcastChannel API
    const bc1 = new BroadcastChannel('test_channel_1');
    bc1.postMessage('this is a test message 1');  
    const bc2 = new BroadcastChannel('test_channel_2');
    bc2.postMessage('this is a test message 2');  
 */
  }

}
