<template>
  <div>
    <img src="../assets/img/like.png" v-if="type === 'like'">
    <img src="../assets/img/discover.png" v-else-if="type === 'discover'">
    <img src="../assets/img/bookmark.png" v-else-if="type === 'bookmark'">
    <img src="../assets/img/pencil.png" v-else-if="type === 'pencil'">
    <img src="../assets/img/share.png" v-else-if="type === 'share'">
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
