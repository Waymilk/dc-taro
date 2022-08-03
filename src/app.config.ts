export default defineAppConfig({
  pages: ["pages/index/index", "pages/subscribe/index", "pages/user/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/index/index",
        text: "",
        iconPath: "./assets/logo.png",
        selectedIconPath: "./assets/logo-on.png",
      },
      {
        pagePath: "pages/subscribe/index",
        text: "订阅",
        iconPath: "./assets/cast.png",
        selectedIconPath: "./assets/cast-on.png",
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: "./assets/user.png",
        selectedIconPath: "./assets/user-on.png",
      },
    ],
  },
});
