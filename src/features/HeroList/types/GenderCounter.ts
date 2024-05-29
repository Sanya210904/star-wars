import {Gender} from './Hero';

export type GenderCounter = {
  [key in Gender]: number;
};
