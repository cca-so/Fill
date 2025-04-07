// JavaScript Document


/*ハンバーガーメニュー*/
$(function () {
  $('.hamburger').click(function () {
    $('.menu').toggleClass('open');
    $(this).toggleClass('active');
  });
});
/*メニュー領域外クリック閉じる*/
$(document).click(function (event) {
  if (!$(event.target).closest('.menu, .hamburger').length) {
    $('.menu').removeClass('open');
    $('.hamburger').removeClass('active');
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svgObject");


  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const path = svgDoc.querySelector(".smoke");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const targetSection = document.getElementById("concept");

    // 幅に応じた補正係数を返す関数
    function getSpeedFactor() {

      const width = window.innerWidth;
      if (width <= 480) return 1.5; // スマホ
      if (width <= 768) return 1.2; // タブレット
      return 0.85; // PC
    }


    function updatePath() {
      const sectionTop = targetSection.offsetTop;
      const sectionHeight = targetSection.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const startScroll = sectionTop - windowHeight;
      const endScroll = sectionTop + sectionHeight;

      if (scrollTop >= startScroll && scrollTop <= endScroll) {
        const scrollPercentage = (scrollTop - startScroll) / (endScroll - startScroll);
        const speedFactor = getSpeedFactor();
        const adjustedPercentage = Math.min(scrollPercentage * speedFactor, 1); // 上限1

        path.style.strokeDashoffset = pathLength * (1 - adjustedPercentage);
      } else if (scrollTop < startScroll) {
        path.style.strokeDashoffset = pathLength;
      } else {
        path.style.strokeDashoffset = 0;
      }

      requestAnimationFrame(updatePath);
    }

    updatePath();
  });
});
