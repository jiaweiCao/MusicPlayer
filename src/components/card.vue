<template>
      <div class="card-img" v-if="imgUrl" :style="{backgroundImage: `url(${imgUrl})`}">
        <div class="card-img-detail hvr-fade">

        </div>
      </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {getUrlWithParams} from "../utils/commonTool"

@Component
export default class Card extends Vue {
  @Prop()imgUrl: string
}
</script>

<style scoped lang="scss">
.card-img {
  @include full-block;
  position: relative;
  background: center no-repeat;
  background-size: contain;
  &-detail {
    @include full-block;
  }
}
</style>
