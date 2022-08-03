<template>
  <view class="logs">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from "vue";
import "./index.scss";

export default {
  setup() {
    const msg = ref("Hello world12212");
    return {
      msg
    };
  }
};
</script>
