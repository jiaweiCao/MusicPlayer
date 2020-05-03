<template>
  <div class="home">
    <MainLayout>
      <template slot="aside">
        <Menu></Menu>
      </template>
      <template slot="header">
      </template>
      <template slot="footer">
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MainLayout from "../../components/layout/MainLayout.vue"
import Menu from "./menu-sider.vue"
import Recommend from "../recommend/index.vue"
@Component({
  components: {
    MainLayout,
    Menu,
    Recommend
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
