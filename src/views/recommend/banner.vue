<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item, index) in bannerList" :key="index">
     <img v-if="item && item.imageUrl" style="width: 100%; height: 100%" :src="item.imageUrl" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {Banner} from "../../common/entity/Response"
@Component
export default class BannerPage extends Vue {
  @Prop({default: () => {return []}}) bannerList: Banner[]
}
</script>

<style scoped lang="scss">

</style>
