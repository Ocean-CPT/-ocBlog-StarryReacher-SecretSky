import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "跃穹的秘密天空 StarryReacher-SecretSky",
  description: "跃穹的秘密天空 StarryReacher-SecretSky",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
