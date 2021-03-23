"use strict";var questions=document.querySelectorAll(".question");questions.forEach((function(e){e.addEventListener("click",(function(n){e.classList.toggle("active")}))}));var buttons=document.querySelectorAll(".criterion .all-button");buttons.forEach((function(e){e.addEventListener("click",(function(n){var t=e.parentNode;if(!t.querySelector(".hidden"))return!1;t.classList.toggle("open")}))}));var range=document.getElementById("range"),minInput=document.querySelector("#minInput"),maxInput=document.querySelector("#maxInput");noUiSlider.create(range,{start:[250,8550],connect:!0,range:{min:0,max:1e4}});var rangeButtons=range.querySelectorAll(".noUi-handle");console.log(rangeButtons),rangeButtons.forEach((function(e){e.innerHTML='<div class="noUi-handle-tip">0</div>',e.addEventListener("mousedown",(function(){e.classList.add("active")})),e.addEventListener("mouseup",(function(){e.classList.remove("active")}))})),range.noUiSlider.on("update",(function(e,n){var t=e[n];n?(maxInput.value=Math.round(t),rangeButtons[n].querySelector(".noUi-handle-tip").innerHTML=Math.round(t)):(rangeButtons[n].querySelector(".noUi-handle-tip").innerHTML=Math.round(t),minInput.value=Math.round(t))})),minInput.addEventListener("change",(function(){range.noUiSlider.set([this.value,null])})),maxInput.addEventListener("change",(function(){range.noUiSlider.set([null,this.value])}));var range1=document.getElementById("range1"),minInput1=document.querySelector("#minInput1"),maxInput1=document.querySelector("#maxInput1");noUiSlider.create(range1,{start:[2,5],connect:!0,range:{min:1,max:10}});var rangeButtons1=range1.querySelectorAll(".noUi-handle");console.log(rangeButtons),rangeButtons1.forEach((function(e){e.innerHTML='<div class="noUi-handle-tip">0</div>',e.addEventListener("mousedown",(function(){e.classList.add("active")})),e.addEventListener("mouseup",(function(){e.classList.remove("active")}))})),range1.noUiSlider.on("update",(function(e,n){var t=e[n];n?(maxInput1.value=Math.round(t),rangeButtons[n].querySelector(".noUi-handle-tip").innerHTML=Math.round(t)):(rangeButtons[n].querySelector(".noUi-handle-tip").innerHTML=Math.round(t),minInput1.value=Math.round(t))})),minInput1.addEventListener("change",(function(){range1.noUiSlider.set([this.value,null])})),maxInput1.addEventListener("change",(function(){range1.noUiSlider.set([null,this.value])}));var brandsButton=document.querySelector("#brandsButton"),brands=document.querySelector(".brands-container");brandsButton.addEventListener("click",(function(){brands.classList.toggle("open")}));var select=document.querySelector("select");select.addEventListener("blur",(function(e){return selectEvent(e)})),select.addEventListener("click",(function(e){return selectEvent(e)}));var selectEvent=function(e){"click"==e.type&&(select.classList.contains("change")?select.classList.remove("change"):select.classList.add("change")),"blur"==e.type&&select.classList.remove("change")},btn=document.querySelector("#burgerMenuButton"),header=document.querySelector("header");btn.addEventListener("click",(function(){header.classList.toggle("opened")}));var filtCont=document.querySelector(".filt-container"),filtBack=document.querySelector(".filt-back"),filterButton=document.querySelector(".open-filter");filterButton.addEventListener("click",(function(){filtCont.classList.toggle("active"),filtBack.classList.toggle("active")})),$(".filt-container").on("click",(function(){filtCont.classList.remove("active"),filtBack.classList.remove("active")})),$(".filt-back").on("click",(function(){filtCont.classList.remove("active"),filtBack.classList.remove("active")})),$(".filt-container > *").on("click",(function(e){e.stopPropagation()}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJ1dHRvbnMiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsInJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtaW5JbnB1dCIsIm1heElucHV0Iiwibm9VaVNsaWRlciIsImNyZWF0ZSIsInN0YXJ0IiwiY29ubmVjdCIsIm1pbiIsIm1heCIsInJhbmdlQnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJhZGQiLCJyZW1vdmUiLCJvbiIsInZhbHVlcyIsImhhbmRsZSIsInZhbHVlIiwiTWF0aCIsInJvdW5kIiwic2V0IiwidGhpcyIsInJhbmdlMSIsIm1pbklucHV0MSIsIm1heElucHV0MSIsInJhbmdlQnV0dG9uczEiLCJicmFuZHNCdXR0b24iLCJicmFuZHMiLCJzZWxlY3QiLCJzZWxlY3RFdmVudCIsImV2ZW50IiwidHlwZSIsImNvbnRhaW5zIiwiYnRuIiwiaGVhZGVyIiwiZmlsdENvbnQiLCJmaWx0QmFjayIsImZpbHRlckJ1dHRvbiIsIiQiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLGFDRUEsSUFBQUEsVUFBQUMsU0FBQUMsaUJBQUEsYUFFQUYsVUFBQUcsU0FBQSxTQUFBQyxHQUNBQSxFQUFBQyxpQkFBQSxTQUFBLFNBQUFDLEdBQ0FGLEVBQUFHLFVBQUFDLE9BQUEsZ0JBTUEsSUFBQUMsUUFBQVIsU0FBQUMsaUJBQUEsMEJBRUFPLFFBQUFOLFNBQUEsU0FBQUMsR0FDQUEsRUFBQUMsaUJBQUEsU0FBQSxTQUFBQyxHQUNBLElBQUFJLEVBQUFOLEVBQUFPLFdBRUEsSUFEQUQsRUFBQUUsY0FBQSxXQUVBLE9BQUEsRUFFQUYsRUFBQUgsVUFBQUMsT0FBQSxj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QyxNQUNBSCxPQUFBcEMsVUFBQXFCLE9BQUEsV0F1QkFvQixJQUFBL0MsU0FBQVcsY0FBQSxxQkFDQXFDLE9BQUFoRCxTQUFBVyxjQUFBLFVBRUFvQyxJQUFBM0MsaUJBQUEsU0FBQSxXQUNBNEMsT0FBQTFDLFVBQUFDLE9BQUEsYUFLQSxJQUFBMEMsU0FBQWpELFNBQUFXLGNBQUEsbUJBQ0F1QyxTQUFBbEQsU0FBQVcsY0FBQSxjQUNBd0MsYUFBQW5ELFNBQUFXLGNBQUEsZ0JBRUF3QyxhQUFBL0MsaUJBQUEsU0FBQSxXQUNBNkMsU0FBQTNDLFVBQUFDLE9BQUEsVUFDQTJDLFNBQUE1QyxVQUFBQyxPQUFBLGFBR0E2QyxFQUFBLG1CQUFBeEIsR0FBQSxTQUFBLFdBQ0FxQixTQUFBM0MsVUFBQXFCLE9BQUEsVUFDQXVCLFNBQUE1QyxVQUFBcUIsT0FBQSxhQUdBeUIsRUFBQSxjQUFBeEIsR0FBQSxTQUFBLFdBQ0FxQixTQUFBM0MsVUFBQXFCLE9BQUEsVUFDQXVCLFNBQUE1QyxVQUFBcUIsT0FBQSxhQUdBeUIsRUFBQSx1QkFBQXhCLEdBQUEsU0FBQSxTQUFBdkIsR0FDQUEsRUFBQWdEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIvLyBGYXFcclxuXHJcbmNvbnN0IHF1ZXN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWVzdGlvbicpO1xyXG5cclxucXVlc3Rpb25zLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgfSlcclxufSlcclxuXHJcbi8vIEJ1dHRvbiA80J/QvtC60LDQt9Cw0YLRjCDQtdGJ0ZE+XHJcblxyXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyaXRlcmlvbiAuYWxsLWJ1dHRvbicpO1xyXG5cclxuYnV0dG9ucy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudE5vZGVcclxuICAgIGNvbnN0IGhpZGRlbkNvbnRlbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIi5oaWRkZW5cIik7XHJcbiAgICBpZiAoIWhpZGRlbkNvbnRlbnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIH0pXHJcbn0pXHJcblxyXG4vLyBSYW5nZVxyXG5cclxudmFyIHJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlJyk7XHJcblxyXG5jb25zdCBtaW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluSW5wdXRcIilcclxuY29uc3QgbWF4SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21heElucHV0XCIpXHJcblxyXG5ub1VpU2xpZGVyLmNyZWF0ZShyYW5nZSwge1xyXG4gIHN0YXJ0OiBbMjUwLCA4NTUwXSxcclxuICBjb25uZWN0OiB0cnVlLFxyXG4gIHJhbmdlOiB7XHJcbiAgICAnbWluJzogMCxcclxuICAgICdtYXgnOiAxMDAwMFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCByYW5nZUJ1dHRvbnMgPSByYW5nZS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vVWktaGFuZGxlXCIpO1xyXG5jb25zb2xlLmxvZyhyYW5nZUJ1dHRvbnMpXHJcblxyXG5yYW5nZUJ1dHRvbnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm5vVWktaGFuZGxlLXRpcFwiPjA8L2Rpdj5gXHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICB9KVxyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIH0pXHJcbn0pXHJcblxyXG5yYW5nZS5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICB2YXIgdmFsdWUgPSB2YWx1ZXNbaGFuZGxlXTtcclxuICBpZiAoaGFuZGxlKSB7XHJcbiAgICBtYXhJbnB1dC52YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgcmFuZ2VCdXR0b25zW2hhbmRsZV0ucXVlcnlTZWxlY3RvcignLm5vVWktaGFuZGxlLXRpcCcpLmlubmVySFRNTCA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByYW5nZUJ1dHRvbnNbaGFuZGxlXS5xdWVyeVNlbGVjdG9yKCcubm9VaS1oYW5kbGUtdGlwJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgICBtaW5JbnB1dC52YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gIH1cclxufSk7XHJcblxyXG5taW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgcmFuZ2Uubm9VaVNsaWRlci5zZXQoW3RoaXMudmFsdWUsIG51bGxdKTtcclxufSk7XHJcblxyXG5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgcmFuZ2Uubm9VaVNsaWRlci5zZXQoW251bGwsIHRoaXMudmFsdWVdKTtcclxufSk7XHJcblxyXG4vLyBSYW5nZSAyXHJcblxyXG52YXIgcmFuZ2UxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlMScpO1xyXG5cclxuY29uc3QgbWluSW5wdXQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5JbnB1dDFcIilcclxuY29uc3QgbWF4SW5wdXQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXhJbnB1dDFcIilcclxuXHJcbm5vVWlTbGlkZXIuY3JlYXRlKHJhbmdlMSwge1xyXG4gIHN0YXJ0OiBbMiwgNV0sXHJcbiAgY29ubmVjdDogdHJ1ZSxcclxuICByYW5nZToge1xyXG4gICAgJ21pbic6IDEsXHJcbiAgICAnbWF4JzogMTBcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgcmFuZ2VCdXR0b25zMSA9IHJhbmdlMS5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vVWktaGFuZGxlXCIpO1xyXG5cclxuY29uc29sZS5sb2cocmFuZ2VCdXR0b25zKVxyXG5cclxucmFuZ2VCdXR0b25zMS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGVsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibm9VaS1oYW5kbGUtdGlwXCI+MDwvZGl2PmBcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIH0pXHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgfSlcclxufSlcclxuXHJcbnJhbmdlMS5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICB2YXIgdmFsdWUgPSB2YWx1ZXNbaGFuZGxlXTtcclxuICBpZiAoaGFuZGxlKSB7XHJcbiAgICBtYXhJbnB1dDEudmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICAgIHJhbmdlQnV0dG9uc1toYW5kbGVdLnF1ZXJ5U2VsZWN0b3IoJy5ub1VpLWhhbmRsZS10aXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmFuZ2VCdXR0b25zW2hhbmRsZV0ucXVlcnlTZWxlY3RvcignLm5vVWktaGFuZGxlLXRpcCcpLmlubmVySFRNTCA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgbWluSW5wdXQxLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1pbklucHV0MS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgcmFuZ2UxLm5vVWlTbGlkZXIuc2V0KFt0aGlzLnZhbHVlLCBudWxsXSk7XHJcbn0pO1xyXG5cclxubWF4SW5wdXQxLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICByYW5nZTEubm9VaVNsaWRlci5zZXQoW251bGwsIHRoaXMudmFsdWVdKTtcclxufSk7XHJcblxyXG4vLyBBbGwgQnJhbmRzXHJcblxyXG5jb25zdCBicmFuZHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JyYW5kc0J1dHRvblwiKTtcclxuY29uc3QgYnJhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmFuZHMtY29udGFpbmVyXCIpXHJcblxyXG5icmFuZHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBicmFuZHMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG59KVxyXG5cclxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcblxyXG5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiBzZWxlY3RFdmVudChlKSk7XHJcbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzZWxlY3RFdmVudChlKSk7XHJcblxyXG5sZXQgc2VsZWN0RXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQudHlwZSA9PSAnY2xpY2snKSB7XHJcbiAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlJykpIHtcclxuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZXZlbnQudHlwZSA9PSAnYmx1cicpIHtcclxuICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2UnKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyAkKCcuc29jaWFscyBpbWcnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbi8vICAgdmFyICRpbWcgPSAkKHRoaXMpO1xyXG4vLyAgIHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cignY2xhc3MnKTtcclxuLy8gICB2YXIgaW1nVVJMID0gJGltZy5hdHRyKCdzcmMnKTtcclxuLy8gICAkLmdldChpbWdVUkwsIGZ1bmN0aW9uKGRhdGEpIHtcclxuLy8gICAgIHZhciAkc3ZnID0gJChkYXRhKS5maW5kKCdzdmcnKTtcclxuLy8gICAgIGlmKHR5cGVvZiBpbWdDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuLy8gICAgICAgJHN2ZyA9ICRzdmcuYXR0cignY2xhc3MnLCBpbWdDbGFzcysnIHJlcGxhY2VkLXN2ZycpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgJHN2ZyA9ICRzdmcucmVtb3ZlQXR0cigneG1sbnM6YScpO1xyXG4vLyAgICAgaWYoISRzdmcuYXR0cigndmlld0JveCcpICYmICRzdmcuYXR0cignaGVpZ2h0JykgJiYgJHN2Zy5hdHRyKCd3aWR0aCcpKSB7XHJcbi8vICAgICAgICRzdmcuYXR0cigndmlld0JveCcsICcwIDAgJyArICRzdmcuYXR0cignaGVpZ2h0JykgKyAnICcgKyAkc3ZnLmF0dHIoJ3dpZHRoJykpXHJcbi8vICAgICB9XHJcbi8vICAgICAkaW1nLnJlcGxhY2VXaXRoKCRzdmcpO1xyXG4vLyAgIH0sICd4bWwnKTtcclxuLy8gfSk7XHJcblxyXG4vLyBNZW51XHJcblxyXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1cmdlck1lbnVCdXR0b25cIik7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcblxyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XHJcbn0pXHJcblxyXG4vLyBGaWx0ZXJcclxuXHJcbmNvbnN0IGZpbHRDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0LWNvbnRhaW5lclwiKTtcclxuY29uc3QgZmlsdEJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHQtYmFja1wiKTtcclxuY29uc3QgZmlsdGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLWZpbHRlclwiKTtcclxuXHJcbmZpbHRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZpbHRDb250LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgZmlsdEJhY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbn0pXHJcblxyXG4kKCcuZmlsdC1jb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgZmlsdENvbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBmaWx0QmFjay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSlcclxuXHJcbiQoJy5maWx0LWJhY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgZmlsdENvbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBmaWx0QmFjay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSlcclxuXHJcbiQoJy5maWx0LWNvbnRhaW5lciA+IConKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcclxufSkiXX0=
