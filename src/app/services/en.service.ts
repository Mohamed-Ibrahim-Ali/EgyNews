import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnService {

  constructor(private _http:HttpClient) { }

  getNews():Observable <any> {
    return this._http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5ec7b9ec038840c98ae80c70ee5a1cfb');
  }
}
