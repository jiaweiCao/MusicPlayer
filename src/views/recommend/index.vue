<template>
    <div class="recommend-box">
      <div class="banner-box">
        <banner-page :bannerList="bannerList"></banner-page>
      </div>
      <!--热门歌单-->
      <div class="hot-list-box">
        <hot-list></hot-list>
      </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import BannerPage from "./banner.vue"
import {SynthesisService} from "../../common/Service/Synthesis-Service"
import {BannerResponse, Banner} from "../../common/entity/Response"
import HotList from "./hot-list.vue"

const $SynthesisService = SynthesisService.getInstance();
@Component({
  components: {
    BannerPage,
    HotList
  }
})
export default class Recommend extends Vue {
  private bannerList: Banner[] = []
  created () {
    $SynthesisService.getBannerPic().then((res: BannerResponse) => {
      this.bannerList = res.banners || []
    })
  }
}
</script>

<style scoped lang="scss">
.recommend-box {
  width: $body-with;
  height: 100%;
  margin: 0 auto;
  .banner-box {
    width: 100%;
    height: 250px;
    margin: 0 auto;
  }
  .hot-list-box {
    width: 100%;
  }
}
</style>
