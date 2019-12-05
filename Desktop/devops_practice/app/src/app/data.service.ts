import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  select()
  {
    return this.http.get("http://172.17.0.1:9898/product");
  }
  
  selectbyId(id)
  {
    return this.http.get("http://172.17.0.1:9898/product/" +id);
  }

  Update(productObj)
  {
    return this.http.put("http://172.17.0.1:9898/product/" +productObj.id, productObj);

  }
}
