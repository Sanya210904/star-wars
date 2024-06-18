import {Route} from '../types/Route';
import {routeName} from './routeName';
import {HomeScreen, HeroDetails} from '@app/screens';

export const routes: Route[] = [
  {
    name: routeName.Home,
    component: HomeScreen,
  },
  {
    name: routeName.HeroDetails,
    component: HeroDetails,
  },
];
