<template>
  <div>
    <h1>Pinia Store</h1>

    <div>Getters :</div>
    <div>Distruction with storeToRefs : {{ doubleCount }}</div>
    <div>Normal : {{count}}</div>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    // const store = useStore();
    // return {
    //   // you can return the whole store instance to use it in the template
    //   store,
    // };
  },
};
</script>

<script setup>
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();

const { name, doubleCount } = storeToRefs(counterStore);

const count = counterStore.doubleCount;
</script>

<style></style>
