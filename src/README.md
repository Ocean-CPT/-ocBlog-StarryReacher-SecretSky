---
# 设置页面为主页
home: true
# 使用Layout布局
layout: Layout
# 设置主页图标为首页图标
icon: home
# 禁用评论功能
comment: false
# 设置背景图像
bgImage: /bg.png
# 自定义背景图像样式
bgImageStyle:
  # 固定背景图像
  background-attachment: fixed
# 设置页面标题
title: 主页
# 设置英雄文本
heroText: 跃穹的秘密天空
# 设置副标题
tagline: StarryReacher-SecretSky
# 设置英雄文本全屏显示
heroFullScreen: true
# 启用热刷新功能
hotReload: true # 热刷新 记得关
# 设置页脚内容
footer: true
---

<!-- 引入自定义字体 -->
<link href="/herotext font.ttf" rel="stylesheet">
<!-- // 引入自定义CSS文件以更改鼠标指针 -->
<!-- <link href="/styles.css" rel="stylesheet"> -->

<style>
/* 定义英雄文本样式 */
.vp-hero-title {
    /* 设置背景为线性渐变，颜色从#ff7e5f到#feb47b，方向从左到右 */
    background: linear-gradient(90deg, #fa709a, #fee140)!important;
    /* 使用webkit背景裁剪属性，将背景裁剪为文本形状 */
    -webkit-background-clip: text!important;
    /* 设置文本填充颜色为透明，以显示背景渐变效果 */
    -webkit-text-fill-color: transparent!important;
    /* 设置字体为 Montserrat */
    /* font-family: '字魂扁桃体', sans-serif!important; */
}

/* 设置vp-navbar的背景色为透明，确保导航栏具有透明效果 */
.vp-navbar {
    background-color: transparent !important;
}

/* 调整主题容器中vp-page的样式，移除顶部填充，以实现特定的布局效果 */
.theme-container .vp-page {
    padding-top: 0 !important;

    /* 设置vp-blog-hero的高度为视窗高度的100%，以实现占据大部分视口的效果 */
    .vp-blog-hero {
        height: 100vh !important;
    }
}

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