let slideIndices = [1, 1]; // 每个slider的当前索引

// 页面加载完成后初始化所有slider
document.addEventListener('DOMContentLoaded', function() {
  showSlides(1, 0); // 初始化第一个slider
  showSlides(1, 1); // 初始化第二个slider
});

// 修改前后切换函数
function plusSlides(n, sliderId) {
  showSlides(slideIndices[sliderId] += n, sliderId);
}

// 修改直接切换函数
function currentSlide(n, sliderId) {
  showSlides(slideIndices[sliderId] = n, sliderId);
}

// 修改显示函数
function showSlides(n, sliderId) {
  let i;
  let slides = document.getElementById('slider' + (sliderId + 1)).getElementsByClassName("mySlides");
  let dots = document.querySelectorAll(`.dot[data-slider="${sliderId}"]`);
  
  if (n > slides.length) {
    slideIndices[sliderId] = 1;
  }
  if (n < 1) {
    slideIndices[sliderId] = slides.length;
  }
  
  // 隐藏当前slider的所有幻灯片
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // 重置当前slider的所有导航点
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // 显示当前幻灯片
  slides[slideIndices[sliderId] - 1].style.display = "block";
  dots[slideIndices[sliderId] - 1].className += " active";
}