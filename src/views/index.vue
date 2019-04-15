<template>
  <div class="wrap">
    <Topbar :data="baseData"></Topbar>
    <Photo :data="photoData"></Photo>
    <Menu :data="menuData"></Menu>
    <Content :data="contentData"></Content>
  </div>
</template>

<script>
import Topbar from '@/components/topbar';
import Photo from '@/components/photo';
import Menu from '@/components/menu';
import Content from '@/components/content';

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
      // 日期，城市，天气
      this.baseData = {
        time: '2019-04-15 06:00:00',
        cityName: '\u4e0a\u6d77',
        climate: '\u591a\u4e91',
        temperature: 19,
      };
      // photo模块
      this.photoData = {
        imgUrl: 'http:\\/\\/image.wufazhuce.com\\/FkQBh3QA3N3QY36sDlrR8xSQYehr',
        likeCount: 8126,
        title: '\u6444\u5f71',
        picInfo: 'Vidar Nordli Mathisen',
        forward: '\u4e0d\u5e78\u4f7f\u8bb8\u591a\u5973\u4eba\u53d1\u80d6\uff0c\u98df\u7269\u7ed9\u5979\u4eec\u5b89\u6170\uff0c\u8fd9\u662f\u751f\u547d\u7684\u672c\u80fd\u3002',
        wordsInfo: '\u8428\u5188',
        volume: 'VOL.2382',
      };

      // menu 模块
      this.menuData = {
        vol: 2382,
        menuList: [{
          content_type: 1,
          content_id: 3785,
          title: '\u900f\u660e\u4eba',
          tag: {
            id: 7,
            title: 'ONE STORY',
          },
        }, {
          content_type: 1,
          content_id: 3788,
          title: '\u4f60\u600e\u4e48\u77e5\u9053\u4ed6\u662f\u90a3\u4e2a\u5bf9\u7684\u4eba\uff1f',
          tag: {
            id: 34,
            title: '\u604b\u7231\u8bfe',
          },
        }, {
          content_type: 2,
          content_id: 917,
          serial_list: [885, 886, 888, 890, 893, 894, 903, 904, 905, 906, 907, 908, 909, 916, 917],
          title: '\u65e5\u843d\u7b2c\u4e94\u5927\u9053\u00b715\u00b7\u6ca1\u6709\u4eba\u662f\u5929\u751f\u7684\u5723\u6bcd\u5a4a',
        }, {
          content_type: 3,
          content_id: 2439,
          title: '\u5c06\u6765\uff0c\u8fd8\u6709\u5fc5\u8981\u7ed3\u5a5a\u5417\uff1f',
        }, {
          content_type: 4,
          content_id: 2981,
          title: '\u4f60\u5e94\u8be5\u64c5\u957f\u53bb\u7231\uff0c\u66f4\u8981\u5b66\u4f1a\u53bb\u621b\u7136\u800c\u6b62',
        }, {
          content_type: 5,
          content_id: 1759,
          title: '\u739b\u5229\u4e9a\u7684\u7eaf\u771f',
        }],
      };

      // content 模块
      const contentList = [{
        id: 17793,
        category: 0,
        display_category: 6,
        item_id: 2412,
        title: '\u6444\u5f71',
        forward: '\u4e0d\u5e78\u4f7f\u8bb8\u591a\u5973\u4eba\u53d1\u80d6\uff0c\u98df\u7269\u7ed9\u5979\u4eec\u5b89\u6170\uff0c\u8fd9\u662f\u751f\u547d\u7684\u672c\u80fd\u3002',
        img_url: 'http://image.wufazhuce.com/FkQBh3QA3N3QY36sDlrR8xSQYehr',
        like_count: 8126,
        post_date: '2019-04-15 06:00:00',
        last_update_date: '2019-04-09 00:40:21',
        author: {},
        pic_info: 'Vidar Nordli Mathisen',
        words_info: '\u8428\u5188',
        subtitle: '',
        content_id: 2412,
        content_type: 0,
        tag_list: [],
        orientation: 0,
      }, {
        id: 17829,
        category: 1,
        display_category: 6,
        item_id: 3785,
        title: '\u900f\u660e\u4eba',
        forward: '\u4e0d\u597d\u610f\u601d\uff0c\u6211\u4eec\u628a\u4f60\u8089\u4f53\u641e\u4e22\u4e86\u3002',
        img_url: 'http://image.wufazhuce.com/FhXZ91vYNXdeVuH4AfWBhQQp_mPV',
        like_count: 968,
        post_date: '2019-04-15 06:00:00',
        last_update_date: '2019-04-15 11:20:21',
        author: {
          user_id: 10293559,
          user_name: '\u9578\u4e09',
          desc: '\u672c\u540d\u5f20\u4f20\u8f89\uff0c\u7537\u6027\uff0c22\u5c81\uff0c\u6c49\u65cf\uff0c\u91cd\u5e86\u4eba\u3002',
          wb_name: '',
          is_settled: 0,
          settled_type: 0,
          summary: '\u5199\u4f5c\u8005\uff0c\u6d41\u6c13\u3002',
          fans_total: 73,
          web_url: 'http://image.wufazhuce.com/Fl-9MH91GAIv3ELZxb13Dbrjiq07',
        },
        subtitle: '',
        content_id: 3785,
        content_type: 1,
        tag_list: [{
          id: 7,
          title: 'ONE STORY',
        }],
      }, {
        id: 17842,
        category: 1,
        display_category: 6,
        item_id: 3788,
        title: '\u4f60\u600e\u4e48\u77e5\u9053\u4ed6\u662f\u90a3\u4e2a\u5bf9\u7684\u4eba\uff1f',
        forward: '\u5931\u604b\u65f6\uff0c\u6211\u4eec\u65f6\u5e38\u602a\u7f6a\u5bf9\u65b9\uff0c\u4f46\u6709\u65f6\uff0c\u5f88\u591a\u95ee\u9898\u662f\u6765\u81ea\u4e8e\u81ea\u5df1\u3002',
        img_url: 'http://image.wufazhuce.com/Fo9I_JJYOf72DcpwWZpxeYlxWsHE',
        like_count: 1361,
        post_date: '2019-04-15 06:00:00',
        last_update_date: '2019-04-14 20:24:21',
        author: {
          user_id: 7671727,
          user_name: '\u9648\u96ea',
          desc: '\u5c0f\u8bf4\u300a\u8774\u8776\u300b\u66fe\u88ab\u9999\u6e2f\u5bfc\u6f14\u9ea6\u5a49\u6b23\u6539\u7f16\u6210\u540c\u540d\u7535\u5f71\uff0c\u8457\u6709\u300a\u604b\u7231\u8bfe\u300b\u300a\u53f0\u59b9\u65f6\u5149\u300b\u300a\u4eba\u59bb\u65e5\u8bb0\u300b\u300a\u8ff7\u5bab\u4e2d\u7684\u604b\u4eba\u300b\u7b49\uff0c\u5fae\u4fe1\u516c\u4f17\u53f7\uff1a\u5c0f\u8bf4\u5bb6\u9648\u96ea\uff08ID\uff1atwchenxue\uff09\u3002',
          wb_name: '',
          is_settled: 0,
          settled_type: 0,
          summary: '\u4f5c\u5bb6',
          fans_total: 12135,
          web_url: 'http://image.wufazhuce.com/Fu6o0fqKHsI_TjdpPX3N2Kc99vNP',
        },
        subtitle: '',
        content_id: 3788,
        content_type: 1,
        tag_list: [{
          id: 34,
          title: '\u604b\u7231\u8bfe',
        }],
      }, {
        id: 17834,
        category: 2,
        display_category: 6,
        item_id: 917,
        title: '\u65e5\u843d\u7b2c\u4e94\u5927\u9053\u00b715\u00b7\u6ca1\u6709\u4eba\u662f\u5929\u751f\u7684\u5723\u6bcd\u5a4a',
        forward: '\u5e2d\u95f4\u89c2\u4f17\u6210\u767e\u4e0a\u5343\uff0c\u800c\u5979\u5fc3\u4e2d\u7684\u89c2\u4f17\uff0c\u5374\u53ea\u6709\u8fd9\u4e48\u4e00\u4f4d\u3002',
        img_url: 'http://image.wufazhuce.com/FuKRpuan92tzgLDC-sbLk2Po-UVf',
        like_count: 219,
        post_date: '2019-04-15 06:00:00',
        last_update_date: '2019-04-14 18:01:32',
        author: {
          user_id: 4814886,
          user_name: '\u82b1\u5927\u94b1',
          desc: '\u82b1\u5927\u94b1\uff0c\u9752\u5e74\u4f5c\u5bb6\u3002',
          wb_name: '@\u82b1\u5927\u94b1',
          is_settled: 0,
          settled_type: 0,
          summary: '\u82b1\u5927\u94b1\uff0c\u9752\u5e74\u4f5c\u5bb6\u3002',
          fans_total: 19885,
          web_url: 'http://image.wufazhuce.com/Fmaj0Hb6PTZezqg7JL6s8K9rQk6r',
        },
        subtitle: '\u8fde\u8f7d\uff1a\u7b2c15\u7ae0',
        content_id: 917,
        content_type: 2,
        tag_list: [],
      }, {
        id: 17840,
        category: 3,
        display_category: 6,
        item_id: '2439',
        title: '\u5c06\u6765\uff0c\u8fd8\u6709\u5fc5\u8981\u7ed3\u5a5a\u5417\uff1f',
        forward: '\u8ba4\u4e3a\u4e00\u592b\u4e00\u59bb\u5236\u662f\u4e3a\u4e86\u6784\u9020\u5b8c\u7f8e\u7684\u4e24\u6027\u5173\u7cfb\u800c\u6765\uff0c\u662f\u5bf9\u5a5a\u59fb\u5236\u5ea6\u6700\u5927\u7684\u8bef\u89e3\u3002',
        img_url: 'http://image.wufazhuce.com/FpZj5pbicxM7ht2-gGHneE-AAV54',
        like_count: 991,
        post_date: '2019-04-15 06:00:00',
        last_update_date: '2019-04-14 20:03:44',
        author: {
          user_id: 0,
          user_name: '\u7f51\u53cb',
          web_url: 'http://image.wufazhuce.com/placeholder-author-avatar.png',
          summary: '',
          desc: '',
          is_settled: '',
          settled_type: '',
          fans_total: '',
          wb_name: '',
        },
        subtitle: '',
        content_id: 2439,
        content_type: 3,
        tag_list: [],
        answerer: {
          user_id: 4814648,
          user_name: '\u4e1c\u4e1c\u67aa',
          desc: '\u57fa\u5c42\u5e7f\u544a\u521b\u610f\u5de5\u4f5c\u8005\uff0c\u4e2a\u4f53\u521b\u4f5c\u8005\u3002\u65b0\u4e66\u300a\u516d\u91cc\u5e84\u9057\u4e8b\u300b\u3002',
          wb_name: '@\u4e1c\u4e1c\u67aa',
          is_settled: 0,
          settled_type: 0,
          summary: '\u57fa\u5c42\u5e7f\u544a\u521b\u610f\u5de5\u4f5c\u8005\uff0c\u4e2a\u4f53\u521b\u4f5c\u8005\u3002',
          fans_total: 161,
          web_url: 'http://image.wufazhuce.com/FmjuT3PLLCDphUyRcXWZeNf4uuv8',
        },
      }, {
        id: 17841,
        category: 4,
        display_category: 6,
        item_id: 2981,
        title: '\u4f60\u5e94\u8be5\u64c5\u957f\u53bb\u7231\uff0c\u66f4\u8981\u5b66\u4f1a\u53bb\u621b\u7136\u800c\u6b62',
        forward: '\u8fd9\u4e2a\u4e16\u754c\u9700\u8981\u52aa\u529b\u5f97\u6765\u7684\u4e1c\u897f\u592a\u591a\u4e86\uff0c\u8b6c\u5982\u4e00\u4efd\u597d\u7b54\u5377\u6216\u4e00\u4e2a\u597d\u5de5\u4f5c\uff0c\u800c\u5979\u8981\u7684\u4ece\u6765\u90fd\u4e0d\u662f\u52bf\u5747\u529b\u654c\u4f60\u8ffd\u6211\u8d76\uff0c\u800c\u662f\u4e00\u4efd\u4e0d\u7528\u52aa\u529b\u53c8\u521a\u521a\u597d\u7684\u7231\u60c5\u3002',
        img_url: 'http://image.wufazhuce.com/FhuLECuWifz_EDoXNjj3z7jNDVxB',
        like_count: 872,
        post_date: '2019-04-15 06:00:00',
        last_update_date: '2019-04-15 02:11:08',
        author: {
          user_id: 9089200,
          user_name: '\u6c5f\u4e0d\u6cca',
          desc: '\u6240\u4ee5\uff0c\u4f60\u5e78\u798f\u5417\uff1f\u4e0d\u8981\u56de\u7b54\u6211\u3002',
          wb_name: '',
          is_settled: 0,
          settled_type: 0,
          summary: '\u6240\u4ee5\uff0c\u4f60\u5e78\u798f\u5417\uff1f\u4e0d\u8981\u56de\u7b54\u6211\u3002',
          fans_total: 6013,
          web_url: 'http://image.wufazhuce.com/Fl0df-t58h4ch6iZsNYlhy4dAVV-',
        },
        subtitle: 'So Far Gone',
        content_id: 2981,
        content_type: 4,
        tag_list: [],
        music_name: 'So Far Gone',
        audio_platform_icon: 'http://image.wufazhuce.com/FpvA4Zg2Lt6L2EuMknvwwdCC_vk0',
        audio_platform_name: '\u770b\u89c1\u97f3\u4e50',
        audio_author: 'Sourcee',
        audio_album: 'So Far Gone',
        cover: 'http://image.wufazhuce.com/FmW4n_5nFe3_U1qh08r0pG1b50ya',
        bg_color: '#000',
      }, {
        id: 17833,
        category: 5,
        display_category: 6,
        item_id: 1759,
        title: '\u739b\u5229\u4e9a\u7684\u7eaf\u771f',
        forward: '\u4e0d\u8bba\u662f\u5361\u6bd4\u5229\u4e9a\uff0c\u8fd8\u662f\u739b\u5229\u4e9a\uff0c\u7686\u662f\u751f\u6d3b\u7684\u5192\u9669\u8005\u548c\u53d7\u96be\u8005\u3002',
        img_url: 'http://image.wufazhuce.com/FibY3wBpblHviR1vCHLvPSkxPtOX',
        like_count: 289,
        post_date: '2019-04-15 06:00:00',
        last_update_date: '2019-04-14 01:03:24',
        author: {
          user_id: 6826634,
          user_name: '\u4e00\u541b',
          desc: '\u534a\u9a6f\u4e4b\u9a6c\u3002',
          wb_name: '@Rosey_Potati',
          is_settled: 0,
          settled_type: 0,
          summary: '\u534a\u9a6f\u4e4b\u9a6c\u3002',
          fans_total: 1222,
          web_url: 'http://image.wufazhuce.com/FgbEXYuUU8VfYjLJbjzxjlavlVVu',
        },
        subtitle: '\u5361\u6bd4\u5229\u4e9a\u4e4b\u591c',
        content_id: 1759,
        content_type: 5,
        tag_list: [],
      }];
      contentList.forEach((item, index) => {
        if (index > 0) {
          this.contentData.push({
            content_id: item.content_id,
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
    },
  },
};
</script>

<style scoped>
  .wrap {
    background-color: #edeeef;
  }
</style>
