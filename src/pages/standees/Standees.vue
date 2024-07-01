<script setup lang="ts">
import StandeesDocument from './StandeesDocument.vue';
import StandeesSidebar from './StandeesSidebar.vue';
</script>

<template>
  <div class="page">
    <div class="document-wrapper">
      <StandeesDocument />
    </div>
    <div class="sidebar-wrapper">
      <StandeesSidebar class="sidebar-wrapper" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
}

.document-wrapper {
  @media print {
    width: 100%;
    overflow: visible;
  }
  //width: 75%;
  background-color: #f8f7f6;
  width: calc(100% - 350px);
  float: left;
  overflow-y: scroll;

  box-sizing: border-box;

  @media only screen and (max-width: 799px) {
    width: 100%;
  }
}

.sidebar-wrapper {
  @media print {
    display: none;
  }
  width: 350px;
  float: right;
  //background-color: white;
  box-shadow:
    rgb(0, 0, 0, 0.22) 0 25.6px 57.6px 0,
    rgb(0, 0, 0, 0.18) 0 4.8px 14.4px;

  box-sizing: border-box;

  @media only screen and (max-width: 799px) {
    display: none;
  }
}
</style>
