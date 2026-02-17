/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// 항상 라이트 모드로 고정
const FORCE_THEME = "light";

// (옵션) 과거에 저장된 theme 값이 남아있으면 다크로 뜰 수 있으니 제거
// 필요 없으면 이 줄은 지워도 되지만, 한 번은 실행되게 두는 게 안전합니다.
try {
  localStorage.removeItem("theme");
} catch (e) {}

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  // 강제 라이트
  return FORCE_THEME;
};

// Determine the computed theme, which can be "dark" or "light".
let determineComputedTheme = () => {
  // 강제 라이트
  return FORCE_THEME;
};

// detect OS/browser preference (사용 안 함: 강제 라이트)
const browserPref = FORCE_THEME;

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  // 어떤 인자가 오더라도 라이트로 고정
  const use_theme = FORCE_THEME;

  if (use_theme === "dark") {
    // (여긴 도달하지 않음)
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else {
    // light
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
};

// Toggle the theme manually (사용 안 함: 강제 라이트)
var toggleTheme = () => {
  // 아무것도 하지 않음
  setTheme(FORCE_THEME);
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // ✅ 항상 라이트 Plotly 테마 적용
        const theme = plotlyLightLayout;

        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template)
            ? { ...theme, ...jsonData.layout.template }
            : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // ✅ 페이지 로드시 무조건 라이트
  setTheme("light");

  // ❌ OS 다크/라이트 변경 감지로 자동전환하는 리스너 제거
  // window.matchMedia('(prefers-color-scheme: dark)')
  //       .addEventListener("change", (e) => {
  //         if (!localStorage.getItem("theme")) {
  //           setTheme(e.matches ? "dark" : "light");
  //         }
  //       });

  // ❌ 토글 버튼 리스너 제거 (버튼도 이미 삭제했지만 안전하게)
  // $('#theme-toggle').on('click', toggleTheme);

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
