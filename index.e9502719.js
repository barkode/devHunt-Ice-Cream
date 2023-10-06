// modal windows
// var close = document.getElementsByClassName('close');
// var openBtn = document.getElementsByClassName('openingFigure');
// Array.from(close, closeButton => {
//   closeButton.addEventListener('click', e => e.target.parentNode.parentNode.style.display = 'none');
// });
// Array.from(openBtn, openButton => {
//   openButton.addEventListener('click', e=> {
//     let modalId = e.target.getAttribute('data-id');
//     document.getElementsById(modalId).style.display = 'flex';
//   });
// });
var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=0;t[o]&&t[o]!==this;)++o;return!!t[o]}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",function(){/* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");/* Перебираем массив кнопок */e.forEach(function(e){/* Назначаем каждой кнопке обработчик клика */e.addEventListener("click",function(e){/* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */e.preventDefault();/* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */var o=this.getAttribute("data-modal");/* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")});// end click
}),o.forEach(function(e){e.addEventListener("click",function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});// end ready
//# sourceMappingURL=index.e9502719.js.map

//# sourceMappingURL=index.e9502719.js.map
