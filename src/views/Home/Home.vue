<template>
  <div class="home">
    <MainLayout></MainLayout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MainLayout from "../../components/layout/MainLayout.vue"

@Component({
  components: {
    MainLayout
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
