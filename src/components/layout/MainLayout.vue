<template>
  <div style="height: 100%">
    <div class="layout-aside">Aside</div>
    <div class="layout-index">
      <div class="layout-header">Header</div>
      <div class="layout-body">Main</div>
    </div>
    <div class="layout-footer">Footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MainLayout extends Vue {
}
</script>

<style scoped lang="scss">
.layout {
  &-aside {
    background-color: aquamarine;
    position: absolute;
    top: 0;
    left: 0;
    width: $aside-width;
    height: 100%;
  }
  &-index {
    position: absolute;
    top: 0;
    left: $aside-width;
    height: calc(100% - 60px);
    width: calc(100% - #{$aside-width});
  }
  &-header {
    width: 100%;
    height: 50px;
    background-color: coral;
  }
  &-body {
    width: 100%;
    background-color: sandybrown;
    height: calc(100% - 50px);
  }
  &-footer {
    background-color: aqua;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    z-index: 999;
  }
}
</style>
