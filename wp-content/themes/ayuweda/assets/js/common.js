// ローディングアニメーション
let start = 0;
let goal = 100;
let speed = 12;
let isFirstVisit = localStorage.getItem('firstVisit') === null;
if (isFirstVisit) {
    localStorage.setItem('firstVisit', 'visited');
    setInterval(function() {
        if (start <= goal) {
            $('.js-loading').html(start);
            start++;
        }
    }, speed);
    $(window).on('load', function() {
        let loading = function() {
            $('.js-loader').addClass('fade-out');
            setTimeout(function() {
                $('.js-loader').hide();
            }, 500);
        };
        setTimeout(loading, 1000);
    });
} else {
    $(document).ready(function() {
        $('.js-loader').addClass('fade-out');
        setTimeout(function() {
            $('.js-loader').hide();
        }, 500);
    });
}

// ハンバーガーメニュー　開き閉じ
const hamBtn = document.querySelectorAll('.js-ham');
hamBtn.forEach(function (target) {
    target.addEventListener('click', function () {
        target.classList.toggle('is-active');
    });
});

// ハンバーガーメニュー　開き閉じ
document.addEventListener('DOMContentLoaded', (event) => {
    const hamLinks = document.querySelectorAll('.js-hamLink');
    const hamContent = document.querySelector('.js-hamContent');

    hamLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            hamContent.classList.toggle('is-active');
        });
    });
});

// ハンバーガーメニュー内のアンカーリンククリック時、メニューを閉じる
const navLinks = document.querySelectorAll('.js-link');
    navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const hamBtn = document.querySelector('.js-ham');
        hamBtn.classList.remove('is-active');
    });
});

// ヘッダー スクロール後シャドー
const headerElements = document.querySelectorAll('.js-header');
window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);
function handleScroll() {
    headerElements.forEach(header => {
        if (window.scrollY > window.innerHeight) {
            header.classList.add('is-active');
        } else {
            header.classList.remove('is-active');
        }
    });
}

// フェードイン
const targetsDelay = document.getElementsByClassName('js-fadeDelay');
for(let i = targetsDelay.length; i--;){
  let observer = new IntersectionObserver((entries, observer) => {
    for(let j = entries.length; j--;){
      setTimeout(() => {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add('active');
        } else {
          entries[j].target.classList.remove('active');
        }
      }, 1300);
    }
  });
  observer.observe(targetsDelay[i]);
}

// フェードイン 2
const targets = document.getElementsByClassName('js-fade');
for(let i = targets.length; i--;){
  let observer = new IntersectionObserver((entries, observer) => {
    for(let j = entries.length; j--;){
      setTimeout(() => {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add('active');
        } else {
          entries[j].target.classList.remove('active');
        }
      },200);
    }
  });
  observer.observe(targets[i]);
}

// news スライダー
let newsSwiper;
function initializeSwiper() {
    if (window.innerWidth <= 600) {
        if (!newsSwiper) {
            newsSwiper = new Swiper('.js-newsSlider', {
                slidesPerView: 1.15,
                spaceBetween: 15,
                loop: true,
                autoplay: {
                    delay: 4000,
                },
                speed: 300,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
    } else {
        if (newsSwiper) {
            newsSwiper.destroy(true, true);
            newsSwiper = undefined;
        }
    }
}
window.addEventListener('load', initializeSwiper);
window.addEventListener('resize', initializeSwiper);

// case スライダー
const caseSwiper = new Swiper(".js-caseSlider", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,
    autoplay: {
		delay: 4000,
	},
    speed: 300,
    navigation: {
        nextEl: '.swiper-button-next',
    },
    breakpoints: {
        1024: {
          slidesPerView: 2.5,
        }
    }
});

// serapisto スライダー
const serapistoSwiper = new Swiper(".js-serapistoSlider", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,
    autoplay: {
		delay: 4000,
	},
    speed: 300,
    pagination: {
        el: '.swiper-pagination',
    }
});