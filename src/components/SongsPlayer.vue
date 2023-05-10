<template>
  <v-card title="Player" class="player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      Song Title
    </v-card-text>
    <v-card-actions>
      <v-btn> Add to favorite </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts"></script>
<style scoped>
.player {
  margin-bottom: 20px;
}
</style>
