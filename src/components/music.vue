<template>
  <div>
    <div class="player">
      <img :src="data.img_url" class="album">
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
      timer: null,
      deg: 0,
    };
  },
  mounted() {
    fetch(`${API.getMusicList}=${this.data.music_name}&limit=1`).then(res => res.json()).then((res) => {
      const musicId = res.result.songs[0].id;
      this.music.src = `${API.getMusicUrl}=${musicId}.mp3`;
    });
  },
  methods: {
    changeState() {
      this.state = !this.state;
      this.playMusic(this.data.music_name);
    },
    playMusic() {
      if (this.state) {
        this.music.play();
      } else {
        this.music.pause();
      }
      if (this.state) {
        this.timer = setInterval(() => {
          document.querySelector('.album').setAttribute('style', `transform: rotate(${this.deg}deg)`);
          this.deg += 0.1;
          if (this.deg > 360) {
            this.deg = 0;
          }
        }, 5);
      } else {
        clearInterval(this.timer);
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
  .music {
    color: $titleColor;
    font-size: 12px;
    font-weight: 300;
    margin-top: 5px;
    margin-bottom: 20px;
  }
</style>
