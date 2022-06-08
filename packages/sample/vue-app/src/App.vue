<script setup lang="ts">
import '@dsy/base/base.css';
import '@dsy/button';
import '@dsy/input';
import { ref } from 'vue';

const name = ref<string>('John Doe');
const count = ref<number>(0);

const increaseCounter = () => {
  count.value = count.value + 1;
};

const handleInput = (e: CustomEvent) => {
  name.value = e.detail.value;
};
</script>

<template>
  <h1>{{ name }} has {{ count }} click</h1>
  <dsy-input type="text" :value="name" @input="handleInput" />
  <div>
    <dsy-button @click="increaseCounter">Click me</dsy-button>
    <dsy-button level="secondary" @click="increaseCounter">Click me otherwise</dsy-button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
