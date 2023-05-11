<template>
  <v-card title="Player" class="player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      {{ randomSong.artist }} - {{ randomSong.title }} [{{ randomSong.year }}]
    </v-card-text>
    <v-card-actions>
      <v-btn @click="emits('add-to-favotite', randomSong.id)">
        Add to favorite
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import type { Song } from "@/types";

const props = defineProps<{ songs: Song[] }>();
const emits = defineEmits<{ (event: "add-to-favotite", id: string): void }>();

const randomSong = props.songs[Math.floor(Math.random() * props.songs.length)];
</script>
<style scoped>
.player {
  margin-bottom: 20px;
}
</style>
