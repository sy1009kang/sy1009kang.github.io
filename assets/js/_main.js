/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// 항상 라이트 모드로 고정
const FORCE_THEME = "light";

// ✅ localStorage에 남아있는 theme 값(예: "dark") 때문에 다시 다크로 뜨는 문제를 원천 차단
// - 페이지 로드 시마다 제거해서 "새로고침하면 다시 라이트"가 되게 함
// - 사용자 설정 유지가 필요하면 이 줄을 제거하고 setTheme() 로직만 조정하세요.
try {
  localStorage.removeItem("theme");
} catch (e) {}

// Determine the expected state of the theme toggle, which can be "dark", "light", or "system".
let determineThemeSetting = () => {
  // 강제 라이트
  return FORCE_THEME;
};

// Determine the computed theme, which can be "dark" or "light".
let determineComputedTheme = () => {
  // 강제 라이트
  return FORCE_THEME;
};

// ✅ OS/browser preference 감지 끔 (항상 light)
const browserPref = FORCE_THEME;

// ✅ Set the theme (localStorage/OS/system 무시)
let setTheme = (theme) => {
  // 핵심: localStorage를 읽지 않음
  const use_theme = theme || browserPref; // = light

  if (use_theme === "dark") {
    // 사실상 도달하지 않음 (안전장치로만 둠)
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else {
    // light
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
};

// ✅ Toggle은 남겨도 되지만, localStorage 저장하면 다시 꼬일 수 있으니 무력화
var toggleTheme = () => {
  // 버튼을 제거했으니 사실상 호출 안 됨.
  // 혹시 호출되더라도 라이트로 고정
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

        // ✅ Plotly도 항상 라이트 테마 적용
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

  // ✅ 로드 시에도 localStorage를 다시 한번 제거 (다른 스크립트가 먼저 set했을 수도 있어서 이중 안전장치)
  try {
    localStorage.removeItem("theme");
  } catch (e) {}

  // ✅ 페이지 로드시 무조건 라이트
  setTheme(FORCE_THEME);

  // ❌ OS 다크/라이트 변경 감지 리스너 완전 제거 (자동 전환 OFF)
  // window.matchMedia('(prefers-color-scheme: dark)')
  //   .addEventListener("change", (e) => {
  //     if (!localStorage.getItem("theme")) {
  //       setTheme(e.matches ? "dark" : "light");
  //     }
  //   });

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

  // Init smooth scroll
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });
});
