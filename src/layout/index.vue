<template>
  <div>
    <nav>
      <app-menu></app-menu>
    </nav>
    <section></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({ name: 'Layout' });
</script>
<script lang="ts" setup>
import AppMenu from './menu/index.vue';
</script>
