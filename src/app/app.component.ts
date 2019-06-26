import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(_http:HttpClient){
    _http.get('https://api.github.com/search/users').subscribe(results =>{
      console.log(results);
    })
  }
}
