import { MovieStore } from "./MovieStore";

export class RootStore {
  MovieStore;

  constructor() {
    this.MovieStore = new MovieStore(this);
  }
}
