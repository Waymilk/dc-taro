<template>
  <swiper
    class="home-banner"
    :circular="true"
    :indicator-dots="true"
    indicator-color="#999"
    indicator-active-color="#fff"
  >
    <swiper-item v-for="(item, index) in 3" :key="index">
      <view class="banner-wrapper">
        <image
          class="banner-item"
          src="../../assets/month.png"
          mode="scaleToFill"
        ></image>
      </view>
    </swiper-item>
  </swiper>
  <view class="home-columns">
    <scroll-view
      class="home-columns-wrapper"
      :scroll-x="true"
      :enhanced="true"
      :show-scrollbar="false"
      @scroll="scroll"
      :paging-enabled="true"
    >
      <view class="column-item">VIP资讯</view>
      <view class="column-item">风口宝</view>
      <view class="column-item">盘前宝</view>
      <view class="column-item">盘前宝</view>
      <view class="column-item">盘前宝</view>
      <view class="column-item">盘前宝</view>
      <view class="column-item">盘前宝</view>
      <view class="column-item">盘前宝</view>
    </scroll-view>
  </view>
  <view class="home-vipweek">
    <view class="subscribe-bar">
      <view class="left">
        <view class="pic"></view>
        <view class="text">
          <view class="name">VIP 资讯精选周报</view>
          <view class="desc">踏准三胎概念政策风口，涨幅超16%</view>
        </view>
      </view>
      <view class="right">查看</view>
    </view>
  </view>
  <view class="home-tabs">
    <view
      class="home-tabs-item"
      v-for="(item, index) in tabList"
      :key="index"
      @tap="tabIndex = index"
      :class="{ 'z-cur': tabIndex === index }"
      >{{ item }}</view
    >
  </view>
  <view class="main-novel-list">
    <nut-empty description="无数据" v-if="!novelList.length"></nut-empty>
    <view class="main-novel-list-item" v-for="item in novelList" :key="item.id">
      <view class="title">{{ item.title }}</view>
      <view class="middle mf-sb">
        <view class="desc">{{ item.summary }}</view>
        <image class="img" mode="aspectFill" :src="item.imgUrl"> </image>
      </view>
      <view class="bottom mf-sb">
        <view class="left">
          <view class="column-name">{{ item.mouldName }}</view>
          <view class="time">{{
            timeAgo(new Date(item.published).valueOf())
          }}</view>
        </view>
        <!-- <view class="right icon-list">
          <view class="icon">
            <text class="iconfont icon-thumbs-up"></text>
            <text class="number">9999</text>
          </view>
          <view class="icon">
            <text class="iconfont icon-eye"></text>
            <text class="number">9999</text>
          </view>
          <view class="icon">
            <text class="iconfont icon-share"></text>
          </view>
        </view> -->
      </view>
    </view>
  </view>
</template>

<script setup>
import "./index.scss";
import { useDidShow, useReachBottom } from "@tarojs/taro";
import service from "../../services";
import { ref, getCurrentInstance, watch } from "vue";
import timeAgo from "../../utils";
console.log(process.env.TARO_ENV);

const pageNum = ref(1);
const pageSize = ref(10);
const tabIndex = ref(0);
const novelList = ref([]);
const tabList = ref(["最新", "已解锁", "免费试读"]);

const lower = () => {
  console.log(222);
};

useDidShow(() => {
  getFreshList();
});

watch(tabIndex, (val) => {
  switch (val) {
    case 0:
      novelList.value = [];
      pageNum.value = 1;
      getFreshList();
      break;
    case 1:
      novelList.value = [];
      pageNum.value = 1;
      getSingleList();
      break;

    case 2:
      break;

    default:
      break;
  }
});

// 页面到底触发
useReachBottom(() => {
  pageNum.value++;
  getFreshList();
});

// 获取最新资讯
const getFreshList = async () => {
  const res = await service.getNovelList({
    mouldId: "",
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    showNewPqb: false,
  });
  let _data = novelList.value.concat(res.data.rows);
  console.log(_data, "_data");
  novelList.value = _data;
};

// 获取单篇解锁
const getSingleList = async () => {
  const res = await service.getBoughtList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  });
  let _data = novelList.value.concat(res.data.rows);
  console.log(_data, "_data");
  novelList.value = _data;
};
</script>
