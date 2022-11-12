import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ByService {
  // private HttpClient httpClient;
  constructor(private httpClient: HttpClient) {
  }

  public getRequest() {
    //this.httpClient.post()
    return this.httpClient.get("http://localhost:8080/rest/pcs/8")
  }

  public getRequestAll() {
    //this.httpClient.post()
    return this.httpClient.get("http://localhost:8080/rest/pcs")
  }

}
