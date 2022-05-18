<template>
  <div>
    <el-menu mode="vertical" unique-opened>
      <menu-item v-for="route in routeList" :key="route.name" :route="route" />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { moduleRoutes, PdRouteRecordRaw } from '@/router';
import { computed, defineComponent } from 'vue';
import MenuItem from './menuItem.vue';
export default defineComponent({ name: 'AppMenu' });
</script>
<script lang="ts" setup>
const routeList = computed(() => getRouteOptions(moduleRoutes));
const getRouteOptions = (routes: PdRouteRecordRaw[]) => {
  return routes;
};
console.log({ routeList: routeList.value });
</script>
