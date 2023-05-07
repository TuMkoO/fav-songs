import { defineStore } from "pinia";

export const useSongsStore = defineStore("songs", {
  state: () => ({
    songs: [
      {
        id: 1,
        artist: "Ashley Wallbridge",
        title: "Harmonies",
        year: 2010,
      },
      {
        id: 2,
        artist: "Ashley Wallbridge",
        title: "Smoke",
        year: 2010,
      },
      {
        id: 3,
        artist: "Ashley Wallbridge",
        title: "Vision",
        year: 2011,
      },
    ],
  }),
  getters: {},
  actions: {},
});
