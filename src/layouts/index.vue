<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
  <component :is="LayoutComponents[layout]" />
<!--  <ThemeDrawer />-->
</template>

<script setup lang="ts" name="layout">
import { type Component, ref } from 'vue'
// import { useGlobalStore } from "@/stores/modules/global";
// import ThemeDrawer from './components/ThemeDrawer/index.vue'
import LayoutVertical from './LayoutVertical/index.vue'

// type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns';
type LayoutType = 'vertical';

const LayoutComponents: Record<LayoutType, Component> = {
  vertical: LayoutVertical
}

const layout = ref('vertical')

// const globalStore = useGlobalStore()
// const layout = computed(() => globalStore.layout)
</script>

<style scoped lang="scss">
.layout {
  min-width: 730px;
}
</style>
