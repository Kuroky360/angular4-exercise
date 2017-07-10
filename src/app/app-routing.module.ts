/**
 * Created by Kuroky360 on 7/10/17.
 */
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.componet';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

const routes:Routes=[
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'detail/:id',component:HeroDetailComponent},
    {path:'heroes',component:HeroesComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}