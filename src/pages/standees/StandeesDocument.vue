<script setup lang="ts">
import { useImagesStore } from '../../store/useImagesStore.ts';
import Standee from './Standee.vue';

const imagesStore = useImagesStore();

const images = imagesStore.images;
</script>

<template>
  <div class="document">
    <div v-for="image in images">
      <Standee :image="image" />
    </div>
  </div>
</template>

<style scoped>
.document {
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
