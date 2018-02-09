<template>
  <header v-if="data">
    <div class="date">
      <span class="day">{{day}}</span>
      <span class="month">{{month}}.{{year}}</span>
    </div>
    <div class="weather">
      <span>{{data.cityName}} · {{data.climate}} {{data.temperature}}℃</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Topbar',
  props: {
    data: Object,
  },
  data() {
    return {
      day: '',
      month: '',
      year: '',
    };
  },
  watch: {
    data() {
      const date = new Date(this.data.time).toString().split(' ');
      this.day = date[2];
      this.month = date[1];
      this.year = date[3];
    },
  },
};
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 60px;
    box-sizing: border-box;
    padding: 10px 15px;
    color: #222;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10;
    .date {
      font-family: Verdana;
      display: inline-block;
      .day {
        display: inline-block;
        line-height: 40px;
        font-size: 40px;
      }
      .month {
        font-size: 12px;
      }
    }
    .weather {
      float: right;
      height: 40px;
      margin-right: 5px;
      display: flex;
      align-items: flex-end;
      span {
        font-weight: 300;
        font-size: 12px;
        color: #9c9c9c;
      }
    }
  }
</style>
