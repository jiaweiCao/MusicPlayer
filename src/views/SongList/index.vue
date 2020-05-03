<template>
    <div>
      this is Songlist
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class SongList extends Vue {
  created () {
    console.log(this.$route.params)
  }
}
</script>

<style scoped lang="scss">

</style>
