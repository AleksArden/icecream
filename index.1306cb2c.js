$(".single-item").slick({dots:!0,arrows:!1}),$(".grid").masonry({itemSelector:".grid-item",stamp:".stamp",columnWidth:".grid-sizer",percentPosition:!1}),window.matchMedia("(min-width: 1200px)").matches?$(".grid").masonry({gutter:8}):window.matchMedia("(min-width: 768px)").matches?$(".grid").masonry({gutter:6}):window.matchMedia("(max-width: 767px)").matches&&$(".grid").masonry({gutter:2}),window.addEventListener("resize",(function(){window.matchMedia("(min-width: 1200px)").matches?$(".grid").masonry({gutter:8}):window.matchMedia("(min-width: 768px)").matches?$(".grid").masonry({gutter:6}):window.matchMedia("(max-width: 767px)").matches&&$(".grid").masonry({gutter:2})})),(()=>{const e={openMobileMenuBtn:document.querySelector("[data-mobile-menu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),hiddenElementBurger:document.querySelector("[data-hidden-burger]"),hiddenElementButton:document.querySelector("[data-hidden-button]"),menuList:document.querySelector(".mob-menu__list")},t=document.querySelector("body");function o(){e.mobileMenu.classList.toggle("is-hidden"),e.hiddenElementBurger.classList.toggle("is-hidden"),e.hiddenElementButton.classList.toggle("is-hidden")}function n(){bodyScrollLock.enableBodyScroll(t)}e.openMobileMenuBtn.addEventListener("click",o),e.openMobileMenuBtn.addEventListener("click",(function(){bodyScrollLock.disableBodyScroll(t)})),e.closeMobileMenuBtn.addEventListener("click",o),e.closeMobileMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",o),e.menuList.addEventListener("click",n)})();const e=document.querySelector("body");function t(){bodyScrollLock.enableBodyScroll(e)}$(".js-open-modal").click((function(){event.preventDefault();var t=$(this).attr("data-modal");$('.js-modal[data-modal="'+t+'"]').addClass("is-shown"),$(".js-modal-overlay").addClass("is-shown"),bodyScrollLock.disableBodyScroll(e)})),$(".js-modal-close").click((function(){$(this).parent(".js-modal").removeClass("is-shown"),$(".js-modal-overlay").removeClass("is-shown"),t()})),$(".js-modal-overlay").click((function(){$(".js-modal.is-shown").removeClass("is-shown"),$(this).removeClass("is-shown"),t()})),getRef=e=>document.querySelector(e),getRef(".modal-made__list").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.action;if(!getRef(`[data-dots="${t}"]`).classList.contains("visually-hidden"))return void function(e){getRef(`[data-dots="${e}"]`).classList.add("visually-hidden"),getRef(`[data-text="${e}"]`).style.display="inline",getRef(`[data-action="${e}"]`).innerHTML="hide"}(t);!function(e){getRef(`[data-dots="${e}"]`).classList.remove("visually-hidden"),getRef(`[data-text="${e}"]`).style.display="none",getRef(`[data-action="${e}"]`).innerHTML="show more"}(t)}));const o=document.querySelectorAll('a[href*="#"]');for(let e of o)e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})}));document.querySelector(".button-arrow").onclick=function(){document.querySelector(".info-hero__secret-box").classList.toggle("active")};const n=document.querySelector(".scroll-top");window.addEventListener("scroll",(()=>{(window.pageYOffset||document.documentElement.scrollTop)>300?n.classList.add("scroll-top--active"):n.classList.remove("scroll-top--active")})),n.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")}))})(),(()=>{const e=document.querySelector("[data-menu-button-3]"),t=document.querySelector("[data-menu-3]");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")}))})(),(()=>{const e=document.querySelector("[data-menu-button-2]"),t=document.querySelector("[data-menu-2]");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")}))})();
//# sourceMappingURL=index.1306cb2c.js.map