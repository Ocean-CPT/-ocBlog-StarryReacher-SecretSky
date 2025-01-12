// 导入 VuePress 客户端配置的定义函数
import { defineClientConfig } from "vuepress/client";

// 导入设置运行时间脚注的函数
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

// 导入设置透明导航栏的函数
import { setupTransparentNavbar, TransparentNavbarOptions } from "vuepress-theme-hope/presets/transparentNavbar.js";

// 定义客户端配置
// 这里使用 defineClientConfig 来定义客户端的配置，以便在客户端侧进行一些自定义的设置
export default defineClientConfig({
    // 设置客户端配置
    setup() {
        // 设置运行时间脚注
        // 参数包括：开始日期、语言特定的显示消息、是否显示运行时间
        setupRunningTimeFooter(
            new Date("2025-01-11"),
            {
                "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
            },
            true,
        );

        // 设置透明导航栏
        // 这里没有参数，表示将启用透明导航栏的默认设置
        const navbarOptions: TransparentNavbarOptions = {
            type: 'homepage', // 或 'homepage', 'all'
            threshold: 500, // 透明的临界距离
            light: '#000000', // 浅色模式下的字体颜色
            dark: '#ffffff' // 深色模式下的字体颜色
        };
        setupTransparentNavbar(navbarOptions);
    },
});