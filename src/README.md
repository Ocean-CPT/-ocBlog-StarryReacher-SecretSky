---
home: true
# layout: BlogHome
icon: home
comment: false
bgImage: /bg.png
title: 首页
heroText: 跃穹的秘密天空
tagline: StarryReacher-SecretSky
heroFullScreen: true
hotReload: true # 热刷新 记得关

# projects:
#   - icon: project
#     name: 项目名称
#     desc: 项目详细描述
#     link: https://你的项目链接

#   - icon: link
#     name: 链接名称
#     desc: 链接详细描述
#     link: https://链接地址

#   - icon: book
#     name: 书籍名称
#     desc: 书籍详细描述
#     link: https://你的书籍链接

#   - icon: article
#     name: 文章名称
#     desc: 文章详细描述
#     link: https://你的文章链接

#   - icon: friend
#     name: 伙伴名称
#     desc: 伙伴详细介绍
#     link: https://你的伙伴链接

#   - icon: https://theme-hope-assets.vuejs.press/logo.svg
#     name: 自定义项目
#     desc: 自定义详细介绍
#     link: https://你的自定义链接

# footer: 自定义你的页脚文字
---

<style>
.vp-navbar {
    background-color: transparent !important;
}

.theme-container .vp-page {
    padding-top: 0 !important;

    .vp-blog-hero {
        height: 100vh !important;
    }
}

/* 隐藏竖屏时的内容 */
/* @media screen and (orientation: portrait) {
    body {
    display: none;
    }
} */
/* 显示横屏时的内容 */
@media screen and (orientation: landscape) {
    body {
    display: block;
    }
}
</style>

<script>
    // 检测是否为移动端
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // 检测是否横屏
    function checkOrientation() {
      if (window.innerWidth > window.innerHeight) {
        // 横屏
        console.log("横屏模式");
      } else {
        // 竖屏
        alert("请将您的设备旋转到横屏模式以获得最佳用户体验。");
      }
    }

    // 标志变量，用于确保 checkOrientation 只执行一次
    let orientationChecked = false;

    // 初始检测
    if (isMobile() && !orientationChecked) {
      checkOrientation();
      orientationChecked = true;
    }
 </script>