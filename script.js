// JavaScript Document

/*ローディングアニメ*/
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      //2回目以降アクセス時の処理
      $(".loading").addClass('is_active');
    } else {
      //初回アクセス時の処理
      sessionStorage.setItem('access', 'true');
      $(".loading_animation").addClass('is_active');
      setTimeout(function () {
        $(".loading").addClass('is_active');
        $(".loading_animation").removeClass('is_active');
      }, 5000);
    }
  }
  webStorage();
});


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


/*PC煙のスクロールアニメ*/
document.addEventListener("DOMContentLoaded", () => {
  const smoke_svg = document.getElementById("smoke_svg");
  
	
  smoke_svg.addEventListener("load", () => {
    const svgDoc = smoke_svg.contentDocument;
    const path = svgDoc.querySelector(".smoke");
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    const targetSection = document.getElementById("concept");
    // 幅に応じた補正係数を返す
    function getSpeedFactor() {
      const width = window.innerWidth;
      if (width <= 1100) return 1.0; 
      if (width <= 1300) return 0.9; 
      return 0.7; 
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


/*フェードアニメーションプラグイン初期化と共通設定*/
AOS.init({
   once:"false"
});
