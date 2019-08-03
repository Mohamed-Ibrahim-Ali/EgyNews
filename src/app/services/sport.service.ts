import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private _http:HttpClient) { }

  getNews():Observable <any> {
    return this._http.get('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=5ec7b9ec038840c98ae80c70ee5a1cfb');
  }
}
