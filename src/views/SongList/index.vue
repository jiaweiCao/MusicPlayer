<template>
    <div class="playlist-box">
      <play-list-detail :playListDetail="playListDetail"></play-list-detail>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {SongListResponse} from "../../common/entity/Response"
import SongsService from "../../common/Service/SongsService"
import PlayListDetail from "./PlayListDetal.vue"

const $SongsService = SongsService.getInstance();

@Component({
  components: {
    PlayListDetail
  }
})
export default class SongList extends Vue {
  public playListDetail: SongListResponse = {} as SongListResponse;
  private query: {id: string};
  private getDetail () {
    this.query = this.$route.query as {id: string} || null
    $SongsService.getSongListDetail(this.query.id).then((res: SongListResponse) => {
      this.playListDetail = res.playlist
      console.log(this.playListDetail)
    })
  }

  created () {
   this.getDetail()
  }
}
</script>

<style scoped lang="scss">
.playlist-box {
  @include full-block;
}
</style>
