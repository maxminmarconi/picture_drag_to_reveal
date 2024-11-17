document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.image-reveal-container');
    const slider = document.querySelector('.slider');
    const overlayImage = document.querySelector('.overlay-image');
    const originalImage = document.querySelector('.original-image');
    let isDragging = false;

    // 添加容器的点击事件
    container.addEventListener('click', moveToClick);

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

    function moveToClick(e) {
        // 如果点击的是滑块，不处理
        if (e.target === slider) return;

        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const position = Math.max(0, Math.min(x / containerRect.width * 100, 100));

        // 添加过渡动画
        slider.style.transition = 'left 0.3s ease';
        overlayImage.style.transition = 'clip-path 0.3s ease';
        originalImage.style.transition = 'clip-path 0.3s ease';

        // 更新位置
        slider.style.left = `${position}%`;
        overlayImage.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
        originalImage.style.clipPath = `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`;

        // 300ms 后移除过渡效果
        setTimeout(() => {
            slider.style.transition = 'none';
            overlayImage.style.transition = 'none';
            originalImage.style.transition = 'none';
        }, 300);
    }

    function startDragging(e) {
        e.preventDefault();
        isDragging = true;
        // 拖动时移除过渡效果
        slider.style.transition = 'none';
        overlayImage.style.transition = 'none';
        originalImage.style.transition = 'none';
    }

    function stopDragging() {
        isDragging = false;
        slider.style.transition = 'left 0.3s ease'; // 停止拖动时添加平滑过渡
        overlayImage.style.transition = 'clip-path 0.3s ease';
        originalImage.style.transition = 'clip-path 0.3s ease';
    }

    function drag(e) {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        const x = (e.type === 'mousemove' ? e.clientX : e.touches[0].clientX) - containerRect.left;
        const position = Math.max(0, Math.min(x / containerRect.width * 100, 100));

        slider.style.left = `${position}%`;
        
        // 同时更新两张图片的 clip-path
        overlayImage.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
        originalImage.style.clipPath = `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`;
    }
}); 