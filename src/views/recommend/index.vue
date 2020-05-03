<template>
    <div class="recommend-box">
      <div class="banner-box">
        <banner-page :bannerList="bannerList"></banner-page>
      </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import BannerPage from "./banner.vue"
import {SynthesisService} from "../../common/Service/Synthesis-Service"
import {BannerRespones, Banner} from "../../common/entity/Response"

const $SynthesisService = SynthesisService.getInstance();
@Component({
  components: {
    BannerPage
  }
})
export default class Recommend extends Vue {
  private bannerList: Banner[] = []
  created () {
    $SynthesisService.getBannerPic().then((res: BannerRespones) => {
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
    height: 300px;
    margin: 0 auto;
  }
}
</style>
