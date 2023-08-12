<script setup lang="ts">
const props = defineProps(['foo', 'bar'])

const emit = defineEmits(['update:msg'])

if (true) {
  const a = 1
} else {
  const b = 2
}

const obj = { 1.1: 1, b: 2 }

type A = 1

</script>

<template>
  <div class="greetings">
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <template>
      <input>
    </template>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
