<template>
  <div class="home">
    <MainLayout>
      <template slot="aside">
        <Menu></Menu>
      </template>
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </MainLayout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MainLayout from "../../components/layout/MainLayout.vue"
import Menu from "./menu-sider.vue"

@Component({
  components: {
    MainLayout,
    Menu
  }
})
export default class Home extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
