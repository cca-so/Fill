// JavaScript Document


/*ハンバーガーメニュー*/
$(function() {
  $('.hamburger').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('active');
  });
});
/*メニュー領域外クリック閉じる*/
$(document).click(function(event) {
  if (!$(event.target).closest('.menu, .hamburger').length) {
    $('.menu').removeClass('open');
    $('.hamburger').removeClass('active');
  }
});


/*スクロール煙アニメ*/
document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svgObject");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const path = svgDoc.querySelector(".smoke");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const targetSection = document.getElementById("concept");

    function updatePath() {
      const sectionTop = targetSection.offsetTop;
      const sectionHeight = targetSection.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const startScroll = sectionTop - windowHeight;
      const endScroll = sectionTop + sectionHeight;

      // スクロールがセクション内にあるか確認
      if (scrollTop >= startScroll && scrollTop <= endScroll) {
        const scrollPercentage = (scrollTop - startScroll) / (endScroll - startScroll) * 0.6;
        path.style.strokeDashoffset = pathLength * (1 - scrollPercentage);
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
