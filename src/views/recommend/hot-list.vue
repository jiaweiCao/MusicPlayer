<template>
    <ul class="hot-list">
      <li class="hot-list-item" v-for="item in cardList" :key="item.id" :title="item.name" @click="getDetail(item)">
        <div class="hot-list-item-card hvr-bob">
          <Card :imgUrl="item.picUrl"></Card>
        </div>
        <div class="hot-list-item-name">{{item.name}}</div>
      </li>
    </ul>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Card from "../../components/card.vue"
import RecommendService from "../../common/Service/Recommend-Service"
import {CommendSong, CommendSongResponse, SongListResponse} from "../../common/entity/Response"
import SongsService from "../../common/Service/SongsService"
const $RecommendService = RecommendService.getInstance();
const $SongsService = SongsService.getInstance();
@Component({
  components: {
    Card
  }
})
export default class HotList extends Vue {
  private cardList: CommendSong[] = []
  private getDetail (item: CommendSong) {
    const id = item.id
    $SongsService.getSongListDetail(id).then((res: SongListResponse) => {
      console.log(res)
      this.$router.push({path: "./songList"})
    })
  }

  created () {
    $RecommendService.getRecommendList().then((res: CommendSongResponse) => {
      this.cardList = res.result || []
    })
  }
}
</script>

<style scoped lang="scss">
.hot-list {
  @include remove-ul-def;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content:space-between;
  &-item {
    width: $card-width;
    height: 180px;
    margin-bottom: 10px;
    cursor: pointer;
    &-card {
      width: $card-width;
      height: $card-width;
    }
    &-name {
      font-size: 12px;
      @include text-ellipsis;
      color: #fff;
      padding: 5px;
    }
  }
}
</style>
