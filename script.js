document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.image-reveal-container');
    const slider = document.querySelector('.slider');
    const overlayImage = document.querySelector('.overlay-image');
    let isDragging = false;

    // 鼠标事件
    slider.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
    // 添加鼠标离开容器时的处理
    container.addEventListener('mouseleave', stopDragging);

    // 触摸事件
    slider.addEventListener('touchstart', (e) => {
        e.preventDefault(); // 防止触摸时的默认行为
        startDragging(e);
    });
    document.addEventListener('touchmove', (e) => {
        e.preventDefault(); // 防止触摸时的默认滚动
        drag(e);
    });
    document.addEventListener('touchend', stopDragging);
    document.addEventListener('touchcancel', stopDragging);

    function startDragging(e) {
        e.preventDefault(); // 防止拖动时选中文本
        isDragging = true;
        slider.style.transition = 'none'; // 拖动时移除过渡效果
        overlayImage.style.transition = 'none';
    }

    function stopDragging() {
        isDragging = false;
        slider.style.transition = 'left 0.3s ease'; // 停止拖动时添加平滑过渡
        overlayImage.style.transition = 'clip-path 0.3s ease';
    }

    function drag(e) {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        const x = (e.type === 'mousemove' ? e.clientX : e.touches[0].clientX) - containerRect.left;
        const position = Math.max(0, Math.min(x / containerRect.width * 100, 100));

        slider.style.left = `${position}%`;
        
        // 同时更新两张图片的 clip-path
        const originalImage = document.querySelector('.original-image');
        overlayImage.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
        originalImage.style.clipPath = `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`;
    }
}); 