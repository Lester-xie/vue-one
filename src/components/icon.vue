<template>
  <div>
    <img src="../assets/img/like.png" v-if="type === 'like'">
    <img src="../assets/img/like-active.png" v-if="type === 'likeActive'">
    <img src="../assets/img/discover.png" v-else-if="type === 'discover'">
    <img src="../assets/img/bookmark.png" v-else-if="type === 'bookmark'">
    <img src="../assets/img/pencil.png" v-else-if="type === 'pencil'">
    <img src="../assets/img/share.png" v-else-if="type === 'share'">
    <img src="../assets/img/arrow-top.png" v-else-if="type === 'arrow-top'">
    <img src="../assets/img/arrow-bottom.png" v-else-if="type === 'arrow-bottom'">
    <img src="../assets/img/arrow-right.png" v-else-if="type === 'arrow-right'">
    <img src="../assets/img/play.png" v-else-if="type === 'play'">
    <img src="../assets/img/pause.png" v-else-if="type === 'pause'">
    <img src="../assets/img/player.png" v-else-if="type === 'player'">
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: String,
  },
};
</script>

<style scoped>
  div {
    display: inline-block;
    height: 18px;
  }
  img {
    width: 18px;
  }
</style>
