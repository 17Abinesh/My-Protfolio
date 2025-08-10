import { Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { HomeComponent } from './module/home/home.component';
import { AboutComponent } from './module/about/about.component';
import { QualificationComponent } from './module/qualification/qualification.component';
import { ExperienceComponent } from './module/experience/experience.component';
import { SkillComponent } from './module/skill/skill.component';

export const routes: Routes = [
    { path: '', redirectTo: '/myprotfolio/home', pathMatch: 'full' },
     { path:'myprotfolio',component:MainComponent,
       children:[
        {path:'home',component:HomeComponent},
        {path:'about',component:AboutComponent},
        {path:'qualification',component:QualificationComponent},
        {path:'experience',component:ExperienceComponent},
        {path:'skill',component:SkillComponent},
       ]
     }
];
