/**
 * Created by Kuroky360 on 7/16/17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero} from './hero';

@Injectable()
export class HeroSearchService{
    constructor(private http:Http){};
    search(term:string):Observable<Hero[]>{
        return this.http.get(`api/heroes/?name=${term}`)
            .map(response=>response.json().data as Hero[]);
    }
}