<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import Todo from './components/Todo.vue';
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <Todo />
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<style scoped></style>
