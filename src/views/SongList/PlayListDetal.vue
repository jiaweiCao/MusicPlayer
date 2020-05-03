<template>
    <div class="playlist-detail">
      <div class="detail-background">
        <img v-if="playListDetail && playListDetail.coverImgUrl" :src="playListDetail.coverImgUrl"/>
      </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

@Component
export default class PlayListDetal extends Vue {
  @Prop()playListDetail: any;
  @Watch('playListDetail',{deep: true})
  private handleChange () {
    console.log(this.playListDetail)
  }
}
</script>

<style scoped lang="scss">
  .playlist-detail {
    outline: 1px red solid;
    width: 100%;
    height: 250px;
  }
  .detail-background {
    width: 200px;
    height: 200px;
    outline: 1px seagreen solid;
    float: left;
    img {
      @include full-block;
    }
  }
</style>
