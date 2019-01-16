<template>
  <el-row>
    <el-col>
      <el-card :body-style="CardStyle">
        <img v-show="newsItem.havePic" :src="newsItem.havePic === true ? newsItem.imageurls[0].url: ''" class="image">
        <div style="padding: 14px;">
          <span>{{newsItem.title}}</span>
          <div class="bottom clearfix">
            <span>{{newsItem.channelName}}</span>
            <span>{{newsItem.source}}</span>
            <time class="time">{{ newsItem.pubDate}}</time>
            <el-button type="text" class="button" @click="toDetail" >查看</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 30%;
    height: 40%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  a{
    color: #aeacac;
  }
  a:hover{
    color: #000;
  }
</style>

<script>
export default {
  props: ['newsItem'],
  data: function () {
    return {
      CardStyle: {
        display: 'flex',
        flexDirection: 'row'
      }
    }
  },
  methods: {
    toDetail: function () {
      const {href} = this.$router.resolve({path: 'news/detail'})
      console.log('被查看新闻的id', this.newsItem.id)
      this.$store.dispatch('selectNews', {
        id: this.newsItem.id
      })
      window.open(href, '_blank')
    }
  }
}
</script>
