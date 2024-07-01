<script setup lang="ts">
import { Cropper } from 'vue-advanced-cropper';

import '@aws-amplify/ui-vue/styles.css';
import { computed, ref, watch } from 'vue';
import 'vue-advanced-cropper/dist/style.css';
import { useImagesStore } from '../../store/useImagesStore.ts';
import CroppingModal from './CroppingModal.vue';

const uploadedImages = ref<string[]>([]);
const files = defineModel({ default: [] });

const handleUpload = () => {
  uploadedImages.value = [];

  for (let i = 0; i < files.value.length; i++) {
    const reader = new FileReader();

    reader.onload = (e) => {
      console.log('onload', e);
      if (e?.target?.result != null && typeof e.target.result === 'string') {
        uploadedImages.value.push(e.target.result);
      }
    };

    reader.readAsDataURL(files.value[i]);
  }
};

watch(files, () => {
  console.log(files.value);
});

// const img = ref(
//   'https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
// );
</script>

<template>
  <div class="sidebar">
    <v-dialog>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="Open Dialog"
          variant="flat"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <CroppingModal :toCrop="uploadedImages" />
      </template>
    </v-dialog>

    <v-file-input
      class="file-input"
      v-model="files"
      label="Upload image"
      prepend-icon="mdi-camera"
      variant="outlined"
      @change="handleUpload"
      clearable
      multiple
    >
    </v-file-input>
  </div>
</template>

<style scoped>
.sidebar {
  //min-width: 300px;
  height: 100vh;
  max-height: 100vh;
  background-color: white;
  //box-shadow:
    rgb(0 0 0 / 22%) 0px 25.6px 57.6px 0px,
    rgb(0 0 0 / 18%) 0px 4.8px 14.4p;
  [role='tablist'] {
    padding-left: 5px;
  }
}

.file-input {
  margin-top: 20px;
}

.uploaded-image img {
  max-width: 200px;
}

.image {
  outline: 1px solid lime;
}
</style>
