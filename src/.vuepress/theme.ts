import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // hostname: "https://mister-hope.github.io",
  fullscreen: true,

  // author: {
  //   name: "Mr.Hope",
  //   url: "https://mister-hope.com",
  // },

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 博客相关
  // blog: {
  //   description: "一个前端开发者",
  //   intro: "/intro.html",
  //   medias: {
  //     Baidu: "https://example.com",
  //     BiliBili: "https://example.com",
  //     Bitbucket: "https://example.com",
  //     Dingding: "https://example.com",
  //     Discord: "https://example.com",
  //     Dribbble: "https://example.com",
  //     Email: "mailto:info@example.com",
  //     Evernote: "https://example.com",
  //     Facebook: "https://example.com",
  //     Flipboard: "https://example.com",
  //     Gitee: "https://example.com",
  //     GitHub: "https://example.com",
  //     Gitlab: "https://example.com",
  //     Gmail: "mailto:info@example.com",
  //     Instagram: "https://example.com",
  //     Lark: "https://example.com",
  //     Lines: "https://example.com",
  //     Linkedin: "https://example.com",
  //     Pinterest: "https://example.com",
  //     Pocket: "https://example.com",
  //     QQ: "https://example.com",
  //     Qzone: "https://example.com",
  //     Reddit: "https://example.com",
  //     Rss: "https://example.com",
  //     Steam: "https://example.com",
  //     Twitter: "https://example.com",
  //     Wechat: "https://example.com",
  //     Weibo: "https://example.com",
  //     Whatsapp: "https://example.com",
  //     Youtube: "https://example.com",
  //     Zhihu: "https://example.com",
  //     VuePressThemeHope: {
  //       icon: "https://theme-hope-assets.vuejs.press/logo.svg",
  //       link: "https://theme-hope.vuejs.press",
  //     },
  //   },
  // },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    // 是否启用对齐功能
    align: true,
    // 是否启用属性功能
    attrs: true,
    // 是否启用代码标签功能
    codeTabs: true,
    // 是否启用组件功能
    component: true,
    // 是否启用示例功能
    demo: false,
    // 是否启用图表功能
    figure: true,
    // 是否启用GitHub风格的Markdown
    gfm: true,
    // 是否启用图片懒加载
    imgLazyload: true,
    // 是否启用图片尺寸调整
    imgSize: true,
    // 是否启用包含功能
    include: true,
    // 是否启用标记功能
    mark: true,
    // 是否启用PlantUML图表
    plantuml: true,
    // 是否启用剧透功能
    spoiler: true,
    // 是否启用样式化功能
    stylize: [
      {
        // 匹配特定内容进行样式化替换
        matcher: "Recommended",
        // 根据匹配结果替换为指定的标签和属性
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    // 是否启用下标功能
    sub: true,
    // 是否启用上标功能
    sup: true,
    // 是否启用标签功能
    tabs: true,
    // 是否启用任务列表功能
    tasklist: true,
    // 是否启用v-pre指令，用于跳过编译
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      assets: "fontawesome-with-brands",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
