<template>
  <div>
    <div class="player">
      <img :src="data.img_url" :class="['album', {running: state}]">
      <div class="icon" @click="changeState">
        <Icon :type="state ? 'pause' : 'play'"></Icon>
      </div>
    </div>
    <div class="music">
      {{data.music_name}} · {{data.audio_author}} | {{data.audio_album}}
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icon';
import API from '@/api';

export default {
  name: 'Music',
  components: {
    Icon,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      state: false,
      music: new Audio(),
    };
  },
  methods: {
    changeState() {
      this.state = !this.state;
      this.playMusic(this.data.music_name);
      // document.querySelector('.album').style.animationPlayState = this.state ? 'running' : 'paused';
    },
    playMusic(musicName) {
      if (this.music.src) {
        if (this.state) {
          this.music.play();
        } else {
          this.music.pause();
        }
      } else {
        fetch(`${API.getMusicList}=${musicName}&limit=1`).then(res => res.json()).then((res) => {
          const musicId = res.result.songs[0].id;
          this.music.src = `${API.getMusicUrl}=${musicId}.mp3`;
          this.music.play();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../style/fontColor';
  .player {
    background: url('../assets/img/music-bg.png') no-repeat;
    background-size: 100%;
    height: 201px;
    margin: 0 -20px;
    display: flex;
    justify-content: center;
    position: relative;
    img {
      height: 201px;
      border-radius: 50%;
      margin: 0 auto;
    }
    .icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding:8px 10px;
      background-color: rgba(22, 22, 22, 0.7);
      border-radius: 50%;
    }
  }
  .album {
    animation:mymove 20s;
    animation-play-state: paused;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  @keyframes mymove
  {
    from {transform: rotate3d(0, 0, 1, 0deg);}
    to {transform: rotate3d(0, 0, 1, 360deg);}
  }
  .music {
    color: $titleColor;
    font-size: 12px;
    font-weight: 300;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  .running {
    animation-play-state: running !important;
  }
</style>
