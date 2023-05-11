<template>
  <main>
    <SongsPlayer :songs="playingSongs" @add-to-favotite="addToFavorite" />
    <SongsList :songs="songs" />
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

// const songs = ref<Song[]>([]);
const songs = ref<Song[]>(songsStore.songs);

const playingSongs: Song[] = [
  {
    id: "1",
    artist: "Gareth Emery",
    title: "Citadel",
    year: 2010,
  },
  {
    id: "2",
    artist: "Gareth Emery",
    title: "Global",
    year: 2010,
  },
  {
    id: "3",
    artist: "Gareth Emery feat. Brute Force",
    title: "Arrival",
    year: 2010,
  },
];

onMounted(() => {
  // const tempSongs: Song[] = [];
  // songsStore.songs.forEach((song) => {
  //   tempSongs.push({
  //     id: song.id,
  //     title: song.title,
  //     artist: song.artist,
  //     year: song.year,
  //   } as Song);
  // });
  // songs.value = tempSongs;
});

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
