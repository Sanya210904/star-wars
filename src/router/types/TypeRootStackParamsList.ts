import {routeName} from '../constants/routeName';

export type TypeRootStackParamsList = {
  [routeName.Home]: undefined;
  [routeName.HeroDetails]: {name: string};
};
