// 导入 vuepress-theme-hope 主题
import { hopeTheme } from "vuepress-theme-hope";

// 导入导航栏配置
import navbar from "./navbar.js";
// 导入侧边栏配置
import sidebar from "./sidebar.js";

// 使用 vuepress-theme-hope 主题配置网站
export default hopeTheme({
  // 定义一个名为hostname的属性，用于存储网站的主机名
  hostname: "https://mister-hope.github.io",
  // 允许全屏显示
  fullscreen: true,

  /**
   * 作者信息
   * 包含作者的名称和网址，用于标识作者并提供访问作者网站的途径
   */
  author: {
    // 作者名称
    name: "Ocean_CPT",
    // 作者网站URL
    // url: "https://mister-hope.com",
  },

  // 网站logo
  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  // GitHub仓库地址
  repo: "Ocean-CPT/_ocBlog_StarryReacher-SecretSky",

  // 文档目录
  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "SpecialThakns<a href='https://example.com' target='_blank'>访问这里</a>",
  // 是否显示页脚
  displayFooter: true,

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

    // 定义组件集合，用于在当前上下文中注册和使用指定的子组件
    components: {
      // 指定需要注册的子组件名称，如Badge和VPCard，以便在当前组件中使用
      components: ["Badge", "VPCard"],
    },

    // 配置图标相关设置，用于确定使用哪种图标库
    icon: {
      // 指定使用的图标资产来源为fontawesome-with-brands，以便在应用中使用这些图标
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
