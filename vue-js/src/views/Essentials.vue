<template>
  <div>
    <div>Essentials</div>

    <div>
      <span>Message: {{ msg }}</span>
    </div>

    <div class="mt-10">Events :</div>

    <div>
      <a-button v-on:click="event">Click Me</a-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<script setup>
const msg = "hello world ; Template Syntax";

function event() {
  alert("event");
}
</script>

<style></style>
