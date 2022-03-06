<template>
  <div>
    <div>composition API</div>
    <div>
      <div>{{ msg }}</div>
      <a-input v-model:value="msg" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//reactive red
const msg = ref("Hello World");
</script>

<style></style>
