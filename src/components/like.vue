<template>
  <div @click.stop="click = !click" class="wrap">
    <Icon :type="click ? 'likeActive' : 'like'"></Icon>
    <div class="number-wrap inline">
      <span :class="['number', 'number1', click ? 'fadeout1' : 'fadein1']">{{count}}</span>
      <span :class="['number', 'number2', click ? 'fadein2' : 'fadeout2']">{{count + 1}}</span>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icon';

export default {
  name: 'Like',
  components: {
    Icon,
  },
  props: {
    count: Number,
  },
  data() {
    return {
      click: false,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../style/fontColor';
  .wrap {
    display: inline-block;
    height: 18px;
  }
  .number-wrap {
    position: relative;
    top: 5px;
    .number {
      display: block;
      font-size: 12px;
      color: $titleColor;
      transform: scale(0.8, 0.8);
      margin-left: -7px;
      transition: .5s;
    }
  }
  .fadein1 {
    opacity: 1;
    position: relative;
    bottom: 0;
  }
  .fadeout1 {
    opacity: 0;
    position: relative;
    bottom: 18px;
  }
  .fadein2 {
    opacity: 1;
    position: relative;
    bottom: 18px;
  }
  .fadeout2 {
    opacity: 0;
    position: relative;
    bottom: 0;
  }
</style>
