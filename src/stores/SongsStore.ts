import { defineStore } from "pinia";

export const useSongsStore = defineStore("songs", {
  state: () => ({
    songs: [
      {
        artist: "Ashley Wallbridge",
        title: "Harmonies",
        year: 2010,
      },
      {
        artist: "Ashley Wallbridge",
        title: "Smoke",
        year: 2010,
      },
      {
        artist: "Ashley Wallbridge",
        title: "Vision",
        year: 2011,
      },
    ],
  }),
  getters: {},
  actions: {},
});
