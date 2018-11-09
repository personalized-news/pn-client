<template>
  <el-row>
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <img :src="newsItem.havePic === true ? newsItem.imageurls[0].url: ''" class="image">
        <div style="padding: 14px;">
          <span>{{newsItem.title}}</span>
          <div class="bottom clearfix">
            <span>{{newsItem.channelName}}</span>
            <span>{{newsItem.source}}</span>
            <time class="time">{{ newsItem.pubDate}}</time>
            <el-button type="text" class="button">查看</el-button>
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
</style>

<script>
export default {
  props: ['newsItem']
}
</script>
