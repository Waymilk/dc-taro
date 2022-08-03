<template>
  <view class="custom-tab-bar">
    <view
      class="tab-item"
      v-for="(item, index) in list"
      :key="item.pagePath"
      @tap="switchTab(item.pagePath, index)"
    >
      <!-- <image
        class="icon"
        :src="selected == index ? item.selectedIconPath : item.iconPath"
      ></image> -->
      <text
        class="iconfont"
        :class="
          selected == index ? item.selectedIconPath + ' z-cur' : item.iconPath
        "
      ></text>
      <text :style="{ color: selected === index ? selectedColor : color }">{{
        item.text
      }}</text>
    </view>
  </view>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import "./index.scss";
const store = useStore();
const selected = computed(() => store.getters.getSelected);

const color = "#000000";
const selectedColor = "#DC143C";

const list = ref([
  {
    pagePath: "pages/index/index",
    text: "",
    iconPath: "icon-logo-on",
    selectedIconPath: "icon-logo"
  },
  {
    pagePath: "pages/subscribe/index",
    text: "订阅",
    iconPath: "icon-cast1",
    selectedIconPath: "icon-cast-on"
  },
  {
    pagePath: "pages/user/index",
    text: "我的",
    iconPath: "icon-user",
    selectedIconPath: "icon-user-on"
  }
]);

console.log(store, 123);

const switchTab = (pagePath, index) => {
  setSelected(index);
  const url = "/" + pagePath;
  Taro.switchTab({
    url: url
  });
};

const setSelected = index => {
  store.dispatch("setSelected", index);
};
</script>
