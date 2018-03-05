<template>
  <div>
    <Topbar :data="baseData"></Topbar>
    <Photo :data="photoData"></Photo>
    <Menu :data="menuData"></Menu>
    <Content :data="contentData"></Content>
    <div class="playState">
      <img src="../assets/img/player.png">
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/topbar';
import Photo from '@/components/photo';
import Menu from '@/components/menu';
import Content from '@/components/content';
import API from '@/api';

export default {
  name: 'Index',
  components: {
    Topbar,
    Photo,
    Menu,
    Content,
  },
  data() {
    return {
      baseData: null,
      photoData: null,
      menuData: null,
      contentData: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      fetch(API.getList).then(res => res.json()).then((res) => {
        if (res.res === 0) {
          const originData = res.data;
          // 日期，城市，天气
          this.baseData = {
            time: originData.date,
            cityName: originData.weather.city_name,
            climate: originData.weather.climate,
            temperature: originData.weather.temperature,
          };
          // photo模块
          const content0 = originData.content_list[0];
          this.photoData = {
            imgUrl: content0.img_url,
            likeCount: content0.like_count,
            title: content0.title,
            picInfo: content0.pic_info,
            forward: content0.forward,
            wordsInfo: content0.words_info,
            volume: content0.volume,
          };

          // menu 模块
          const menu = originData.menu;
          this.menuData = {
            vol: menu.vol,
            menuList: menu.list,
          };

          // content 模块
          const contentList = originData.content_list;
          contentList.forEach((item, index) => {
            if (index > 0) {
              this.contentData.push({
                content_type: item.content_type,
                tag_list: item.tag_list,
                title: item.title,
                answerer: item.answerer || '',
                author: item.author,
                img_url: item.img_url,
                forward: item.forward,
                like_count: item.like_count,
                subtitle: item.subtitle,
                music_name: item.music_name || '',
                audio_author: item.audio_author || '',
                audio_album: item.audio_album || '',
              });
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .playState {
    position: fixed;
    top: 100px;
    right: -3px;
    img {
      height: 20px;
    }
  }
</style>
