<template>
  <v-card class="mx-auto pa-2">
    <v-list>
      <v-list-subheader>Favorite Songs</v-list-subheader>

      <v-list-item
        v-for="(song, i) in props.songs"
        :key="i"
        :value="song"
        active-color="primary"
        rounded="shaped"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-headphones"></v-icon>
        </template>

        <template v-slot:append>
          <v-icon
            icon="mdi-close"
            @click="songsStore.deleteSong(song.id)"
          ></v-icon>
        </template>

        <v-list-item-title v-text="song.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { useSongsStore } from "@/stores/SongsStore";
import type { Song } from "../types";

const props = defineProps<{ songs: Song[] }>();

//store
const songsStore = useSongsStore();
</script>
