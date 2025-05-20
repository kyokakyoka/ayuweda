<!DOCTYPE html>
<html lang="ja">

<head>
    <title>AYUWEDA〜私が自分のお医者さま〜</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.min.css" type="text/css" />
    <script>
        !(function() {
            const viewport = document.querySelector('meta[name="viewport"]');

            function switchViewport() {
                const value =
                    window.outerWidth > 390 ?
                    'width=device-width,initial-scale=1' :
                    'width=390,target-densitydpi=device-dpi';
                if (viewport.getAttribute('content') !== value) {
                    viewport.setAttribute('content', value);
                }
            }
            addEventListener('resize', switchViewport, false);
            switchViewport();
        })();
    </script>
    <?php wp_head(); ?>
</head>

<body>
    <header class="l-header">
        <h1 class="l-header-logo">
            <a href="">
                <img src="header_logo" alt="AYUWEDA">
            </a>
        </h1>
        <div class="l-header-unit">
            <ul class="l-header-unit-nav">
                <li>
                    <a>
                        私たちについて
                    </a>
                </li>
                <li>
                    <a>サービス
                    </a>
                </li>
                <li>
                    <a>代表挨拶
                    </a>
                </li>
                <li>
                    <a>お客様の声
                    </a>
                </li>
                <li>
                    <a>お知らせ
                    </a>
                </li>
                <li>
                    <a>よくあるご質問
                    </a>
                </li>
            </ul>
            <a class="l-header-unit-insta">インスタのロゴ</a>
            <div class="l-header-unit-ham js-ham">
                <span class="l-header-unit-ham-line"></span>
                <span class="l-header-unit-ham-line"></span>
            </div>

        </div>
    </header>