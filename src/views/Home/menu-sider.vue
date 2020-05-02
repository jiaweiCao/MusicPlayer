<template>
    <div class="menu-box">
        <ul class="icon-detail">
          <li></li>
          <li>MusicPlayer</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { DJService } from '../../common/Service/DJ-Service'

const DJServiceInstance = DJService.getInstance()
export default class Menu extends Vue {
  handleTest () {
    DJServiceInstance.getBannerPic().then(r => {
      console.log(r, 666666666666)
    })
  }
}
</script>

<style scoped lang="scss">
.menu-box {
  @include full-block;
    ul {
      @include remove-ul-def;
      width: 100%;
      height: 60px;
      outline: 1px solid red;
      line-height: 60px;
      &>li {
        display: inline-block;
        vertical-align: middle;
      }
      :nth-child(1) {
        width: 50px;
        height: 50px;
        outline: 1px solid red;
        margin-right: 15px;
      }
    }
}
</style>
