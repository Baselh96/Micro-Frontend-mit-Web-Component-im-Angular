import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit() {
    //Hiermit werden die Micro Frntends als Scripte geladen und an Bady angehängt.
    const script = document.createElement('script');
    script.src = "http://localhost:8080/microfrontend-one/main.js";
    document.body.appendChild(script); 
    
    const script1 = document.createElement('script');
    script1.src = "http://localhost:8080/microfrontend-two/main.js";
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "http://localhost:59948/microfrontend/main.js";
    document.body.appendChild(script2);
    
    //Datenaustausch über Local Storage
    localStorage.setItem("attribut2", "Attribut 2 von Shell zum ersten Micro Frontend!");
    
  /*
    //Empfangen der Daten durch den WindowEvent
    onmessage = event => { console.log(event.data)}
    window.addEventListener('message', event => console.log(event.data));

    //Empfangen der DAten durch BroadcastChannel API
    const bc = new BroadcastChannel('test_channel_1');
    bc.addEventListener('message', event => console.log(event.data))

    const bc2 = new BroadcastChannel('test_channel_2');
    bc2.addEventListener('message', event => console.log(event.data))
    */
  }

}
