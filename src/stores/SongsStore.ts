import { defineStore } from "pinia";
import type { Song } from "@/types";

export const useSongsStore = defineStore("songs", {
  state: () => ({
    songs: [
      {
        id: "1",
        artist: "Ashley Wallbridge",
        title: "Harmonies",
        year: 2010,
      },
      {
        id: "2",
        artist: "Ashley Wallbridge",
        title: "Smoke",
        year: 2010,
      },
      {
        id: "3",
        artist: "Ashley Wallbridge",
        title: "Vision",
        year: 2011,
      },
    ],
  }),
  getters: {},
  actions: {
    addSong(song: Song): void {
      this.songs.push({
        id: song.id,
        artist: song.artist,
        title: song.title,
        year: song.year,
      } as Song);
    },

    deleteSong(songId: string): void {
      //find song
      const id = this.songs.findIndex((song) => song.id == songId);

      //delete song from store
      this.songs.splice(id, 1);
    },
  },
});
