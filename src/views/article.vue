<template>
  <div v-if="data" class="wrap">
    <div class="title">{{data.title}}</div>
    <div class="author">
      <span>文 / {{data.author_list[0].user_name}}</span>
    </div>
    <div v-html="content"></div>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'Article',
  props: [
    'type',
    'id',
  ],
  data() {
    return {
      data: null,
      content: '',
    };
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      const index = this.type - 1;
      const data = [
        'essay',
        'serialcontent',
        'question',
        'music',
        'movie',
      ];
      fetch(`${API.getContent}${data[index]}/htmlcontent/${this.id}`)
        .then(res => res.json())
        .then((res) => {
          this.data = res.data;
          document.write(this.data.html_content);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrap {
    font-size: 16px;
    color: #333;
    line-height: 32px;
    padding: 0;
    margin: 0 20px;
    height: 100vh;
    font-family: "PingFangSC-Light",sans-serif;
    .title {
      font-size: 24px;
      font-weight: 700;
      margin-top: 30px;
      line-height: 36px
    }
    .author {
      margin-top: 30px;
      display: table;
      width: 100%;
      span {
        display: table-cell;
        font-size: 12px;
        vertical-align: middle;
      }
    }
  }
</style>
