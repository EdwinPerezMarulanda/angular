import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Musica} from './pages/musica/musica';
import {Audiovisuales} from './pages/audiovisuales/audiovisuales';
import {ArtesMarciales} from './pages/artes-marciales/artes-marciales';
import {Voleibol} from './pages/voleibol/voleibol';
import {Astronomia} from './pages/astronomia/astronomia';
import {Robotica} from './pages/robotica/robotica';
import {Contact} from './pages/contact/contact';

export const routes: Routes = [
  {path: '', component:Home},
  {path: 'musica', component:Musica},
  {path: 'audiovisuales', component:Audiovisuales},
  {path: 'artes_marciales', component:ArtesMarciales},
  {path: 'voleibol', component:Voleibol},
  {path: 'astronomia', component:Astronomia},
  {path: 'robotica', component:Robotica},
  {path: 'contacto', component:Contact},
  {path: 'inicio', component:Home},
];
