import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {IPc} from "../../models/system";

@Injectable({
  providedIn: 'root'
})
export class ByService {
  // private HttpClient httpClient;
  constructor(private httpClient: HttpClient) {
  }

  public getRequest(id: string | null) {
    //this.httpClient.post()
    return this.httpClient.get("http://localhost:8080/rest/pcs/" + id);
  }

  public getRequestAll() {
    //this.httpClient.post()
    return this.httpClient.get("http://localhost:8080/rest/pcs");
  }

  //TODO: Replace 'any' with 'IPc' (and fix compatibility error)
  public postRequest(newPc: any) {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json',
        }
      )
    };

    console.log("posting to rest... " +  JSON.stringify(newPc));

    return this.httpClient.post("http://localhost:8080/rest/pcs", JSON.stringify(newPc), httpOptions)
      .subscribe({
        next:(data: any) => {console.log(JSON.stringify(data))},
        error: error => console.log(error)
      });
  }

}
