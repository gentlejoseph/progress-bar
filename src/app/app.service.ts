import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable()
export class AppService {

    constructor( private http: HttpClient) {
    }

  getProgressBar(): Observable<any> {
    return this.http.get(`${environment.services['get-progress-bar']}`).pipe(
      shareReplay(1)
    );
  }
}
