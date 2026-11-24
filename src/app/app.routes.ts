import { About } from './commbonent/about/about';
import { Blog } from './commbonent/blog/blog';
import { Home } from './commbonent/home/home';
import { Routes } from '@angular/router';
import { Notfound } from './commbonent/notfound/notfound';

export const routes: Routes = [
    {path : '' , component : Home },
    {path : 'home' , component : Home},
    {path : 'blog' , component : Blog},
    {path: 'about' , component : About},
    {path : "**" , component : Notfound
    }
];
 