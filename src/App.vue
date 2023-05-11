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

const songs = ref<Song[]>([]);

const playingSongs: Song[] = [
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
];

onMounted(() => {
  const tempSongs: Song[] = [];

  songsStore.songs.forEach((song) => {
    tempSongs.push({
      id: song.id,
      title: song.title,
      artist: song.artist,
      year: song.year,
    } as Song);
  });

  songs.value = tempSongs;
});

const addToFavorite = (songId: string) => {
  console.log(songId);
};
</script>

<style scoped></style>
