import {Hero} from './Hero';

export type HeroesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Hero[];
};
