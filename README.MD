# 图片拖拽显示效果 (Image Drag to Reveal)

一个简单的图片拖拽显示效果实现，允许用户通过拖动滑块来对比两张图片的差异。

## 功能特点

- 支持鼠标拖动和触摸屏操作
- 平滑的过渡动画效果
- 响应式设计，适配不同屏幕尺寸
- 简洁的拖动滑块设计
- 防止拖动时的文本选中
- 支持触摸设备的滑动操作

## 使用方法

1. 引入文件 
- 将 `styles.css`、`script.js` 和 `index.html` 文件放在同一目录下
- 替换 `Helicopter.jpg` 和 `HelicopterOverlay.jpg` 为你想要对比的两张图片
- 在浏览器中打开 `index.html` 文件即可使用

## 技术实现

- 使用 HTML5 的 clip-path 属性实现图片裁切效果
- JavaScript 实现拖拽交互
- CSS3 实现平滑过渡动画
- 响应式布局确保在不同设备上的良好体验

## 浏览器兼容性

- Chrome 55+
- Firefox 54+
- Safari 11+
- Edge 79+
- iOS Safari 11+
- Android Chrome 55+

## 注意事项

- 建议使用相同尺寸的图片以获得最佳效果
- 图片大小建议控制在合理范围内以保证加载性能
- 触摸设备上需要禁用页面缩放以获得最佳体验
