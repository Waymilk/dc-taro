import { createApp } from "vue";
import { Empty } from "@nutui/nutui-taro";
import store from "./store";
import "./app.scss";

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(Empty).use(store);

export default App;
