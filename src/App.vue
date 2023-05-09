<template>
  <main>
    <SongsList :songs="songs" />
  </main>
</template>

<script setup lang="ts">
import { useSongsStore } from "@/stores/SongsStore";
import { onMounted, ref } from "vue";
import type { Song } from "./types";
import SongsList from "./components/SongsList.vue";

//store
const songsStore = useSongsStore();

const songs = ref<Song[]>([]);

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
</script>

<style scoped></style>
