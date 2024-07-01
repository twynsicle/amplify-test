<script setup lang="ts">
import { Cropper } from 'vue-advanced-cropper';
import { ref } from 'vue';
import { useImagesStore } from '../../store/useImagesStore.ts';

const props = defineProps<{
  toCrop: string[] | undefined;
}>();

const cropperRef = ref<typeof Cropper | null>(null);
const cropperImage = ref<string | null>(props.toCrop?.[0] ?? null);
const cropperImageIndex = ref<number | null>(0);

const imagesStore = useImagesStore();

const setActiveImage = (image: string, index: number) => {
  cropperImage.value = image;
  cropperImageIndex.value = index;
};

const createStandee = () => {
  const { canvas } = cropperRef?.value?.getResult();

  imagesStore.addImage({
    id: '1',
    dataUrl: canvas.toDataURL(),
    size: 'medium',
  });
};
</script>

<template>
  <div class="cropping-modal">
    <v-card class="cropper-wrapper">
      <!-- Scrollable -->
      <div class="images-to-process">
        <img
          v-for="(uploadedImage, index) in props.toCrop"
          @click="() => setActiveImage(uploadedImage, index)"
          :src="uploadedImage"
          alt=""
          :class="{
            active: index === cropperImageIndex,
            'image-to-process': true,
          }"
        />
      </div>

      <cropper
        class="cropper"
        :src="cropperImage"
        ref="cropperRef"
        imageRestriction="none"
        :stencil-props="{
          aspectRatio: 10 / 12,
        }"
      />
      <div class="controls"></div>
      <VBtn @click="createStandee">Create Standee</VBtn>

      <!--      <div v-for="image in imagesStore.images">-->
      <!--        <img :src="image.dataUrl" class="image" />-->
      <!--      </div>-->
    </v-card>
  </div>
</template>

<style scoped>
.cropper-wrapper {
  min-width: 80%;
  background-color: white;
  padding: 20px;
}

.images-to-process {
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
}

.image-to-process {
  margin-right: 10px;
  height: 150px;

  &.active {
    border: 1px solid black;
  }
}

.cropper {
  height: 800px;
  width: 1000px;
  background: #ddd;
}

.controls {
  padding-top: 20px;
}
</style>
