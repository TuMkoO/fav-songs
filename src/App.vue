<template>
  <main>
    <SongsPlayer :songs="playingSongs" @add-to-favotite="addToFavorite" />
    <SongsList :songs="songs" :is-loading="isLoading" />
  </main>
</template>

<script setup lang="ts">
import { useSongsStore } from "@/stores/SongsStore";
import { onMounted, ref } from "vue";
import type { Song } from "./types";
import SongsList from "./components/SongsList.vue";
import SongsPlayer from "./components/SongsPlayer.vue";

//store
const songsStore = useSongsStore();

const songs = ref<Song[]>(songsStore.songs);
const isLoading = ref(false);

const playingSongs: Song[] = [
  {
    id: "4",
    artist: "Gareth Emery",
    title: "Citadel",
    year: 2010,
  },
  {
    id: "5",
    artist: "Gareth Emery",
    title: "Global",
    year: 2010,
  },
  {
    id: "6",
    artist: "Gareth Emery feat. Brute Force",
    title: "Arrival",
    year: 2010,
  },
];

const addToFavorite = (songId: string) => {
  //find song
  const song = playingSongs.find((song) => song.id === songId);

  //add song
  if (song) {
    songsStore.addSong(song);
  }
};
</script>

<style scoped></style>
