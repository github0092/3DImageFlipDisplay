// 在页面加载完成后运行init函数
window.onload = init;

function init() {
    // 获取canvas元素和上下文
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // 设置canvas宽度和高度
    var canvasWidth = canvas.width = 400;
    var canvasHeight = canvas.height = 400;

    // 图片资源
    var imageUrl = "https://via.placeholder.com/400"; // 你可以替换为你自己的图片地址

    // 创建图片对象
    var image = new Image();
    image.src = imageUrl;

    // 图片加载完成后执行渲染函数
    image.onload = function() {
        render();
    };

    function render() {
        // 清空画布
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // 保存当前的绘制状态
        ctx.save();

        // 将原点移到canvas中心
        ctx.translate(canvasWidth / 2, canvasHeight / 2);

        // 设置旋转角度
        var angle = Math.PI / 180 * 1;

        // 以canvas中心为旋转中心进行旋转
        ctx.rotate(angle);

        // 绘制图片
        ctx.drawImage(image, -canvasWidth / 2, -canvasHeight / 2, canvasWidth, canvasHeight);

        // 恢复绘制状态
        ctx.restore();

        // 每隔一段时间重绘一次，实现动画效果
        requestAnimationFrame(render);
    }
}
