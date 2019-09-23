import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CountriService {

  constructor(private _httpclient:HttpClient) { }
  getcountri():Observable<any>{
    return this._httpclient.get('https://restcountries.eu/rest/v2/all');

  }
  getcountriname():Observable<any>{
    return this._httpclient.get('https://restcountries.eu/rest/v2/name/india?fullText=true');

  }
  /*
  getSingleCountri(country:string):Observable<any>
  {

  }
*/
}
