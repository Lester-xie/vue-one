<template>
  <div>
    <Topbar :data="baseData"></Topbar>
    <Photo :data="photoData"></Photo>
    <Menu :data="menuData"></Menu>
  </div>
</template>

<script>
import Topbar from '@/components/topbar';
import Photo from '@/components/photo';
import Menu from '@/components/menu';
import API from '@/api';

export default {
  name: 'Index',
  components: {
    Topbar,
    Photo,
    Menu,
  },
  data() {
    return {
      baseData: null,
      photoData: null,
      menuData: null,
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
          const menuList = originData.menu;
        }
      });
    },
  },
};
</script>
