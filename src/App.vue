<template>
  <main>
    <v-card class="mx-auto pa-2" max-width="300">
      <v-list>
        <v-list-subheader>Favorite Songs</v-list-subheader>

        <v-list-item
          v-for="(song, i) in songs"
          :key="i"
          :value="song"
          active-color="primary"
          rounded="shaped"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-headphones"></v-icon>
          </template>

          <v-list-item-title v-text="song.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </main>
</template>

<script setup lang="ts">
import { useSongsStore } from "@/stores/SongsStore";
import { onMounted, reactive } from "vue";

interface Song {
  id: string;
  title: string;
  artist: string;
  year: number;
}

//store
const songsStore = useSongsStore();

const songs: Song[] = reactive([]);

onMounted(() => {
  console.log();

  songsStore.songs.forEach((song) => {
    songs.push({
      id: song.id,
      title: song.title,
      artist: song.artist,
      year: song.year,
    } as Song);
  });
});
</script>

<style scoped></style>
