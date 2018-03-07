<template>
  <div>
    <div class="content">
      <div class="content-item" v-for="(item, index) in data"
           :key="index"
           v-if="item.content_type!=='8'"
           @click="redirect(item.content_type, item.content_id)">
        <div class="type text-center">- {{item.content_type | contentType(item.tag_list)}} -</div>
        <div class="title">{{item.title}}</div>
        <div class="author" v-if="item.content_type === '3'">{{item.answerer.user_name}}答</div>
        <div class="author" v-else>文 / {{item.author.user_name}}</div>
        <div class="img-wrap">
          <template v-if="item.content_type === '4'">
            <Music :data="item"></Music>
          </template>
          <template v-else>
            <img :src="item.img_url">
          </template>
        </div>
        <div class="forward">{{item.forward}}</div>
        <template v-if="item.content_type === '5'">
          <div class="subtitle right">
            ——《{{item.subtitle | getSubtitle}}》
          </div>
          <div class="clearfix"></div>
        </template>
        <div class="operation">
          <span class="date">今天</span>
          <div class="right">
            <Like :count="item.like_count"></Like>
            <!--<Icon type="share"></Icon>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icon';
import Like from '@/components/like';
import Music from '@/components/music';

export default {
  name: 'Content',
  components: {
    Icon,
    Like,
    Music,
  },
  props: {
    data: Array,
  },
  methods: {
    redirect(type, id) {
      location.href = `/article/${type}/${id}`;
    },
  },
  filters: {
    contentType(type, tag) {
      if (tag.length > 0) {
        return tag[0].title;
      }
      return [
        '阅读',
        '连载',
        '问答',
        '音乐',
        '影视',
      ][type - 1];
    },
    getSubtitle(subtitle) {
      if (subtitle.indexOf(':') > -1) {
        return subtitle.split(':')[1];
      }
      return subtitle;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../style/fontColor';
  .content {
    .content-item {
      padding: 10px 20px;
      font-weight: 300;
      margin-bottom: 4px;
      background-color: #fff;
      .type {
        color: $titleColor;
        font-size: 12px;
      }
      .title {
        margin-top: 10px;
        font-size: 20px;
        color: $mainColor;
      }
      .author {
        margin-top: 14px;
        margin-bottom: 10px;
        color: $titleColor;
        font-size: 14px;
      }
      .img-wrap {
        img {
          width: 100%;
        }
      }
      .forward,
      .subtitle{
        color: #767678;
        font-size: 14px;
        font-weight: 300;
        line-height: 30px;
      }
      .operation {
        margin-top: 20px;
        .date {
          color: $titleColor;
          font-size: 12px;
        }
        .likeContent {
          .number {
            display: inline-block;
            font-size: 12px;
            color: $titleColor;
            transform: scale(0.8, 0.8);
            position: relative;
            bottom: 12px;
            right:6px;
          }
        }
        > div {
          position: relative;
          bottom: 5px;
        }
      }
    }
  }
</style>
