<template>
  <div v-if="data" class="photo-wrap">
    <div class="photo-content">
      <img :src="data.imgUrl" class="photo" @click="openModal">
      <div class="like-count">
        <Icon type="like"></Icon>
        <span class="number">{{data.likeCount}}</span>
      </div>
    </div>
    <div class="info-wrap">
      <p class="photo-info text-center">
        {{data.title}} | {{data.picInfo}}
      </p>
      <p class="forward">
        {{data.forward}}
      </p>
      <p class="photo-info text-center">
        {{data.wordsInfo}}
      </p>
    </div>
    <div class="bottom-wrap">
      <div class="left discover">
        <Icon type="discover"></Icon>
        <span>发现</span>
      </div>
      <div class="right operation">
        <Icon type="bookmark"></Icon>
        <Icon type="pencil"></Icon>
        <Icon type="share"></Icon>
      </div>
    </div>
    <div class="clearfix"></div>
    <transition name="fade">
      <div class="photo-modal" v-show="visible" @click="closeModal" ref="modal">
        <p class="vol">{{data.volume}}</p>
        <img :src="data.imgUrl" class="photo">
        <p class="info">{{data.title}} | {{data.picInfo}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '@/components/icon';

export default {
  name: 'Photo',
  components: {
    Icon,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    openModal(e) {
      const top = e.target.getBoundingClientRect().top - 122;
      this.$refs.modal.style.top = `${top}px`;
      this.visible = true;
      // 对设置display: none 的元素使用过渡，需要在设置改变属性后使用几毫秒的延迟设置样式才能生效
      setTimeout(() => {
        this.$refs.modal.className += ' showImage';
      }, 5);
    },
    closeModal(e) {
      if (e.target.className !== 'photo') {
        this.$refs.modal.className = 'photo-modal';
        this.visible = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .photo-wrap {
    background-color: #fff;
    .photo-content {
      position: relative;
      .photo {
        width: 100%;
      }
      .like-count {
        position: absolute;
        bottom: 20px;
        right: 15px;
        background-color: rgba(50, 50, 50, 0.5);
        color: #fff;
        font-size: 12px;
        padding: 2px 10px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .number {
          display: inline-block;
          font-weight: 100;
          transform: scale(0.8, 0.8);
        }
      }
    }
    .info-wrap {
      margin: 5px 40px;
      .photo-info {
        margin: 5px 0;
        color: #9c9c9c;
        font-size: 12px;
        font-weight: 200;
      }
      .forward {
        margin: 80px 0;
        color: #575859;
        font-size: 14px;
        font-weight: 300;
        line-height: 30px;
      }
    }
    .bottom-wrap {
      margin: 0 15px;
      margin-top: 30px;
      .discover {
        font-size: 12px;
        font-weight: 300;
        color: #9c9c9c;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          margin-left: 2px;
        }
      }
      .operation {
        > div {
          margin-left: 25px;
        }
      }
    }
    .photo-modal {
      transition: .5s;
      position: fixed;
      box-sizing: border-box;
      padding-top: 35px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 11;
      .photo {
        width: 100%;
      }
      p {
        color: #fff;
        font-size: 12px;
        font-weight: 300;
        transform: scale(0.9, 0.9);
        margin:30px 0;
        margin-left: -10px;
      }
      .vol {
        margin-top: 40px;
      }
    }
    .showImage {
      top: 0 !important;
      padding: 35px 15px;
    }
  }
</style>
