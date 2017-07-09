/**
 * Created by Kuroky360 on 7/3/17.
 */
import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService{
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly():Promise<Hero[]>{
        return new Promise(resolve=>{
           setTimeout(()=>resolve(this.getHeroes()),2000);
        });
    }
}
