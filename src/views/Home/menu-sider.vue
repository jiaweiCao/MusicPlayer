<template>
    <div class="menu-box">
        <ul class="icon-detail">
          <li></li>
          <li>MusicPlayer</li>
        </ul>
        <ul class="menu-list" @click="handleMenuClick">
          <router-link
            :key="index"
            :to="item.path"
            active-class="menu-button-active"
            class="menu-button"
            tag="li"
            v-for="(item, index) in menuList"
          >
            <span class="menu-title">{{ item.title }}</span>
          </router-link>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { DJService } from '../../common/Service/DJ-Service'

const DJServiceInstance = DJService.getInstance()
export default class Menu extends Vue {
  private menuList: any[] = [
    {title: "🎶推荐音乐", path: "/recommend"},
    {title: "🧱排行榜", path: "#1"},
    {title: "🎁电台", path: "#2"},
    {title: "😀歌手", path: "#3"}
  ]

  handleTest () {
    DJServiceInstance.getBannerPic().then(r => {
      console.log(r, 666666666666)
    })
  }

  private handleMenuClick (e: Event) {
    console.log(e.target)
  }
}
</script>

<style scoped lang="scss">
.menu-box {
  @include full-block;
    ul {
      @include remove-ul-def;
      text-align: left;
      width: 100%;
      color: #fff;
    }
    .icon-detail {
      height: 60px;
      line-height: 60px;
      padding-left: $menu-padding;
      width: calc(100% - #{$menu-padding});
      margin-bottom: 30px;
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
  .menu-list {
    text-align: left;
    font-size: 12px;
    width: calc(100% - #{2 * $menu-padding});
    margin: 0 auto;
    .menu-button {
      height: $menu-button-height;
      text-align: left;
      line-height: $menu-button-height;
      font-size: 12px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #2E2E2F;
      }
      &-active {
        background-color: $menu-button-active;
        &:hover {
          background-color: $menu-button-active !important;
        }
      }
    }
  }
}
</style>
