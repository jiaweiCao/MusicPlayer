<template>
  <div style="height: 100%">
    <div class="layout-aside">
      <slot name="aside"></slot>
    </div>
    <div class="layout-index">
      <div class="layout-header">
        <slot name="header"></slot>
      </div>
      <div class="layout-body">
        <router-view />
      </div>
    </div>
    <div class="layout-footer">
      <slot name="footer"></slot>
    </div>
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
    background-color: #171718;
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
    height: calc(100% - 62px);
    width: calc(100% - #{$aside-width});
  }
  &-header {
    width: 100%;
    height: 50px;
    background-color: #1E1E1F;
  }
  &-body {
    width: 100%;
    background-color: #1E1E1F;
    height: calc(100% - 50px);
  }
  &-footer {
    border-top: 2px #343435 solid;
    background-color: #1E1E1F;
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
