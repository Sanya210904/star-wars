import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {$api} from '../../../api';
import {HeroesResponse} from '../types/HeroesResponse';
import {HeroWithLike} from '../types/HeroWithLike';
import {GenderCounter} from '../types/GenderCounter';

type State = {
  isLoading: boolean;
  error: string;
  heroItems: HeroWithLike[];
  totalPages: number;
  likeCounter: GenderCounter;
};

const initialState: State = {
  isLoading: false,
  error: '',
  heroItems: [],
  totalPages: Infinity,
  likeCounter: {
    male: 0,
    female: 0,
    'n/a': 0,
    unknown: 0,
  },
};

export const fetchHeroes = createAsyncThunk<HeroesResponse, number>(
  'hero/getAll',
  async (page, {rejectWithValue}) => {
    try {
      const response = await $api.get(`people?page=${page}`);

      if (response.status !== 200) {
        throw new Error('');
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    setLike(state, action: PayloadAction<string>) {
      const heroName = action.payload;

      const currentHero = state.heroItems.find(hero => hero.name === heroName);
      if (!currentHero) return;

      if (currentHero.hasLike) {
        state.likeCounter[currentHero.gender] -= 1;
      } else {
        state.likeCounter[currentHero.gender] += 1;
      }

      currentHero.hasLike = !currentHero.hasLike;
    },
    resetLike(state) {
      (Object.keys(state.likeCounter) as Array<keyof GenderCounter>).forEach(
        gender => {
          state.likeCounter[gender] = 0;
        },
      );

      state.heroItems = state.heroItems.map(hero => ({
        ...hero,
        hasLike: false,
      }));
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      const heroAmount = action.payload.count;
      const totalPages = Math.floor(heroAmount / 10);

      const heroes = action.payload.results.map(item => ({
        ...item,
        hasLike: false,
      }));

      state.heroItems.push(...heroes);
      state.isLoading = false;

      if (totalPages !== Infinity) state.totalPages = totalPages;
    });
    builder.addCase(fetchHeroes.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default heroSlice.reducer;
export const {setLike, resetLike} = heroSlice.actions;
