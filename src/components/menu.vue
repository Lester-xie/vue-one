<template>
  <div class="menu-wrap" v-if="data">
    <div class="title text-center" @click="showList">
      一个&emsp;VOL.{{data.vol}}&emsp;<Icon :type="iconType" class="iconBottom scale"></Icon>
    </div>
    <div class="list-wrap" ref="list">
      <ul>
        <li v-for="(item, index) in data.menuList"
            :key="index"
            v-if="item.content_type!=='8'"
            @click="redirect(item.content_type, item.content_id)">
          <Icon type="arrow-right" class="left scale bottom"></Icon>
          <div class="inline">
            <p>{{contentType(item.content_type, item.tag)}}</p>
            <p>{{item.title}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icon';

export default {
  name: 'Menu',
  components: {
    Icon,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      active: false,
      listHeight: 0,
    };
  },
  methods: {
    showList() {
      this.active = !this.active;
      if (this.active) {
        this.scroll();
        this.$refs.list.style.height = `${this.listHeight}px`;
      } else {
        this.$refs.list.style.height = 0;
      }
    },
    scroll() {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c < this.listHeight) {
        window.requestAnimationFrame(this.scroll);
        window.scrollTo(0, c + 8);
      }
    },
    contentType(type, tag) {
      if (tag) {
        return tag.title;
      }
      return [
        '阅读',
        '连载',
        '问答',
        '音乐',
        '影视',
      ][type - 1];
    },
    redirect(type, id) {
      location.href = `/article/${type}/${id}`;
    },
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.listHeight = this.$refs.list.getBoundingClientRect().height;
        this.$refs.list.style.height = 0;
      });
    },
  },
  computed: {
    iconType() {
      return this.active ? 'arrow-bottom' : 'arrow-top';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../style/fontColor';
  .menu-wrap {
    margin: 4px 0;
    background-color: #fff;
    font-size: 14px;
    font-weight: 300;
    line-height: 40px;
    padding: 0 15px;
    overflow-y: hidden;
    .scale {
      transform: scale(0.6, 0.6);
    }
    .title {
      color: $contentColor;
      .iconBottom {
        position: relative;
        top: 4px;
      }
    }
    .list-wrap {
      transition: .5s;
      ul {
        color: $contentColor;
        font-size: 14px;
        list-style: none;
        padding: 20px 0;
        margin: 0;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          p {
            margin: 0;
            margin-left: 8px;
            line-height: 23px;
          }
        }
      }
    }
  }
  .bottom {
    position: relative;
    bottom: 4px;
  }
</style>
