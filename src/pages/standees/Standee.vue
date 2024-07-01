<script setup lang="ts">
import { Image } from '../../store/useImagesStore.ts';

const props = defineProps<{
  image: Image;
}>();
</script>

<template>
  <div class="standee">
    <div class="tab back"></div>
    <img :src="image.dataUrl" alt="" class="image back" />
    <img :src="image.dataUrl" alt="" class="image front" />
    <div class="tab front"></div>
  </div>
</template>

<style scoped>
.standee {
  width: 200px;
  //height: 800px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.tab {
  height: 30px;
  width: 100%;

  &.back {
    border-bottom: 1px solid black;
  }
  &.front {
    border-top: 1px solid black;
  }
}

.image {
  width: 100%;

  &.back {
    transform: scale(-1, -1);
    border-top: 1px solid black;
  }
}
</style>
