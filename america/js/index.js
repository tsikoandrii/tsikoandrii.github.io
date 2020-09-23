"use strict";var questions=document.querySelectorAll(".question");questions.forEach((function(e){e.addEventListener("click",(function(n){e.classList.toggle("active")}))}));var buttons=document.querySelectorAll(".criterion .all-button");buttons.forEach((function(e){e.addEventListener("click",(function(n){var t=e.parentNode;if(!t.querySelector(".hidden"))return!1;t.classList.toggle("open")}))}));var range=document.getElementById("range"),minInput=document.querySelector("#minInput"),maxInput=document.querySelector("#maxInput");noUiSlider.create(range,{start:[250,8550],connect:!0,range:{min:0,max:1e4}});var rangeButtons=range.querySelectorAll(".noUi-handle");console.log(rangeButtons),rangeButtons.forEach((function(e){e.innerHTML='<div class="noUi-handle-tip">0</div>',e.addEventListener("mousedown",(function(){e.classList.add("active")})),e.addEventListener("mouseup",(function(){e.classList.remove("active")}))})),range.noUiSlider.on("update",(function(e,n){var t=e[n];n?(maxInput.value=Math.round(t),rangeButtons[n].querySelector(".noUi-handle-tip").innerHTML=Math.round(t)):(rangeButtons[n].querySelector(".noUi-handle-tip").innerHTML=Math.round(t),minInput.value=Math.round(t))})),minInput.addEventListener("change",(function(){range.noUiSlider.set([this.value,null])})),maxInput.addEventListener("change",(function(){range.noUiSlider.set([null,this.value])}));var range1=document.getElementById("range1"),minInput1=document.querySelector("#minInput1"),maxInput1=document.querySelector("#maxInput1");noUiSlider.create(range1,{start:[2,5],connect:!0,range:{min:1,max:10}});var rangeButtons1=range1.querySelectorAll(".noUi-handle");console.log(rangeButtons),rangeButtons1.forEach((function(e){e.innerHTML='<div class="noUi-handle-tip">0</div>',e.addEventListener("mousedown",(function(){e.classList.add("active")})),e.addEventListener("mouseup",(function(){e.classList.remove("active")}))})),range1.noUiSlider.on("update",(function(e,n){var t=e[n];n?(maxInput1.value=Math.round(t),rangeButtons[n].querySelector(".noUi-handle-tip").innerHTML=Math.round(t)):(rangeButtons[n].querySelector(".noUi-handle-tip").innerHTML=Math.round(t),minInput1.value=Math.round(t))})),minInput1.addEventListener("change",(function(){range1.noUiSlider.set([this.value,null])})),maxInput1.addEventListener("change",(function(){range1.noUiSlider.set([null,this.value])}));var brandsButton=document.querySelector("#brandsButton"),brands=document.querySelector(".brands-container");brandsButton.addEventListener("click",(function(){brands.classList.toggle("open")}));var select=document.querySelector("select");select.addEventListener("blur",(function(e){return selectEvent(e)})),select.addEventListener("click",(function(e){return selectEvent(e)}));var selectEvent=function(e){"click"==e.type&&(select.classList.contains("change")?select.classList.remove("change"):select.classList.add("change")),"blur"==e.type&&select.classList.remove("change")},btn=document.querySelector("#burgerMenuButton"),header=document.querySelector("header");btn.addEventListener("click",(function(){header.classList.toggle("opened")}));var filtCont=document.querySelector(".filt-container"),filtBack=document.querySelector(".filt-back"),filterButton=document.querySelector(".open-filter");filterButton.addEventListener("click",(function(){filtCont.classList.toggle("active"),filtBack.classList.toggle("active")}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJ1dHRvbnMiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsInJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtaW5JbnB1dCIsIm1heElucHV0Iiwibm9VaVNsaWRlciIsImNyZWF0ZSIsInN0YXJ0IiwiY29ubmVjdCIsIm1pbiIsIm1heCIsInJhbmdlQnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJhZGQiLCJyZW1vdmUiLCJvbiIsInZhbHVlcyIsImhhbmRsZSIsInZhbHVlIiwiTWF0aCIsInJvdW5kIiwic2V0IiwidGhpcyIsInJhbmdlMSIsIm1pbklucHV0MSIsIm1heElucHV0MSIsInJhbmdlQnV0dG9uczEiLCJicmFuZHNCdXR0b24iLCJicmFuZHMiLCJzZWxlY3QiLCJzZWxlY3RFdmVudCIsImV2ZW50IiwidHlwZSIsImNvbnRhaW5zIiwiYnRuIiwiaGVhZGVyIiwiZmlsdENvbnQiLCJmaWx0QmFjayIsImZpbHRlckJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUEsYUNFQSxJQUFBQSxVQUFBQyxTQUFBQyxpQkFBQSxhQUVBRixVQUFBRyxTQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLGlCQUFBLFNBQUEsU0FBQUMsR0FDQUYsRUFBQUcsVUFBQUMsT0FBQSxnQkFNQSxJQUFBQyxRQUFBUixTQUFBQyxpQkFBQSwwQkFFQU8sUUFBQU4sU0FBQSxTQUFBQyxHQUNBQSxFQUFBQyxpQkFBQSxTQUFBLFNBQUFDLEdBQ0EsSUFBQUksRUFBQU4sRUFBQU8sV0FFQSxJQURBRCxFQUFBRSxjQUFBLFdBRUEsT0FBQSxFQUVBRixFQUFBSCxVQUFBQyxPQUFBLGNBTUEsSUFBQUssTUFBQVosU0FBQWEs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T0FBQSxXQXVCQW9CLElBQUEvQyxTQUFBVyxjQUFBLHFCQUNBcUMsT0FBQWhELFNBQUFXLGNBQUEsVUFFQW9DLElBQUEzQyxpQkFBQSxTQUFBLFdBQ0E0QyxPQUFBMUMsVUFBQUMsT0FBQSxhQUtBLElBQUEwQyxTQUFBakQsU0FBQVcsY0FBQSxtQkFDQXVDLFNBQUFsRCxTQUFBVyxjQUFBLGNBQ0F3QyxhQUFBbkQsU0FBQVcsY0FBQSxnQkFFQXdDLGFBQUEvQyxpQkFBQSxTQUFBLFdBQ0E2QyxTQUFBM0MsVUFBQUMsT0FBQSxVQUNBMkMsU0FBQTVDLFVBQUFDLE9BQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi8vIEZhcVxyXG5cclxuY29uc3QgcXVlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1ZXN0aW9uJyk7XHJcblxyXG5xdWVzdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9KVxyXG59KVxyXG5cclxuLy8gQnV0dG9uIDzQn9C+0LrQsNC30LDRgtGMINC10YnRkT5cclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JpdGVyaW9uIC5hbGwtYnV0dG9uJyk7XHJcblxyXG5idXR0b25zLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZWwucGFyZW50Tm9kZVxyXG4gICAgY29uc3QgaGlkZGVuQ29udGVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGRlblwiKTtcclxuICAgIGlmICghaGlkZGVuQ29udGVudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgfSlcclxufSlcclxuXHJcbi8vIFJhbmdlXHJcblxyXG52YXIgcmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2UnKTtcclxuXHJcbmNvbnN0IG1pbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5JbnB1dFwiKVxyXG5jb25zdCBtYXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWF4SW5wdXRcIilcclxuXHJcbm5vVWlTbGlkZXIuY3JlYXRlKHJhbmdlLCB7XHJcbiAgc3RhcnQ6IFsyNTAsIDg1NTBdLFxyXG4gIGNvbm5lY3Q6IHRydWUsXHJcbiAgcmFuZ2U6IHtcclxuICAgICdtaW4nOiAwLFxyXG4gICAgJ21heCc6IDEwMDAwXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHJhbmdlQnV0dG9ucyA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm9VaS1oYW5kbGVcIik7XHJcbmNvbnNvbGUubG9nKHJhbmdlQnV0dG9ucylcclxuXHJcbnJhbmdlQnV0dG9ucy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gIGVsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibm9VaS1oYW5kbGUtdGlwXCI+MDwvZGl2PmBcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIH0pXHJcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgfSlcclxufSlcclxuXHJcbnJhbmdlLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gIHZhciB2YWx1ZSA9IHZhbHVlc1toYW5kbGVdO1xyXG4gIGlmIChoYW5kbGUpIHtcclxuICAgIG1heElucHV0LnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgICByYW5nZUJ1dHRvbnNbaGFuZGxlXS5xdWVyeVNlbGVjdG9yKCcubm9VaS1oYW5kbGUtdGlwJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJhbmdlQnV0dG9uc1toYW5kbGVdLnF1ZXJ5U2VsZWN0b3IoJy5ub1VpLWhhbmRsZS10aXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICAgIG1pbklucHV0LnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICByYW5nZS5ub1VpU2xpZGVyLnNldChbdGhpcy52YWx1ZSwgbnVsbF0pO1xyXG59KTtcclxuXHJcbm1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICByYW5nZS5ub1VpU2xpZGVyLnNldChbbnVsbCwgdGhpcy52YWx1ZV0pO1xyXG59KTtcclxuXHJcbi8vIFJhbmdlIDJcclxuXHJcbnZhciByYW5nZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2UxJyk7XHJcblxyXG5jb25zdCBtaW5JbnB1dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbklucHV0MVwiKVxyXG5jb25zdCBtYXhJbnB1dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21heElucHV0MVwiKVxyXG5cclxubm9VaVNsaWRlci5jcmVhdGUocmFuZ2UxLCB7XHJcbiAgc3RhcnQ6IFsyLCA1XSxcclxuICBjb25uZWN0OiB0cnVlLFxyXG4gIHJhbmdlOiB7XHJcbiAgICAnbWluJzogMSxcclxuICAgICdtYXgnOiAxMFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCByYW5nZUJ1dHRvbnMxID0gcmFuZ2UxLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm9VaS1oYW5kbGVcIik7XHJcblxyXG5jb25zb2xlLmxvZyhyYW5nZUJ1dHRvbnMpXHJcblxyXG5yYW5nZUJ1dHRvbnMxLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgZWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJub1VpLWhhbmRsZS10aXBcIj4wPC9kaXY+YFxyXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgfSlcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICB9KVxyXG59KVxyXG5cclxucmFuZ2UxLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gIHZhciB2YWx1ZSA9IHZhbHVlc1toYW5kbGVdO1xyXG4gIGlmIChoYW5kbGUpIHtcclxuICAgIG1heElucHV0MS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgcmFuZ2VCdXR0b25zW2hhbmRsZV0ucXVlcnlTZWxlY3RvcignLm5vVWktaGFuZGxlLXRpcCcpLmlubmVySFRNTCA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByYW5nZUJ1dHRvbnNbaGFuZGxlXS5xdWVyeVNlbGVjdG9yKCcubm9VaS1oYW5kbGUtdGlwJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgICBtaW5JbnB1dDEudmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICB9XHJcbn0pO1xyXG5cclxubWluSW5wdXQxLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICByYW5nZTEubm9VaVNsaWRlci5zZXQoW3RoaXMudmFsdWUsIG51bGxdKTtcclxufSk7XHJcblxyXG5tYXhJbnB1dDEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gIHJhbmdlMS5ub1VpU2xpZGVyLnNldChbbnVsbCwgdGhpcy52YWx1ZV0pO1xyXG59KTtcclxuXHJcbi8vIEFsbCBCcmFuZHNcclxuXHJcbmNvbnN0IGJyYW5kc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnJhbmRzQnV0dG9uXCIpO1xyXG5jb25zdCBicmFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJyYW5kcy1jb250YWluZXJcIilcclxuXHJcbmJyYW5kc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGJyYW5kcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbn0pXHJcblxyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuXHJcbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHNlbGVjdEV2ZW50KGUpKTtcclxuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHNlbGVjdEV2ZW50KGUpKTtcclxuXHJcbmxldCBzZWxlY3RFdmVudCA9IChldmVudCkgPT4ge1xyXG4gIGlmIChldmVudC50eXBlID09ICdjbGljaycpIHtcclxuICAgIGlmIChzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UnKSkge1xyXG4gICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCgnY2hhbmdlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xyXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZScpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vICQoJy5zb2NpYWxzIGltZycpLmVhY2goZnVuY3Rpb24oKXtcclxuLy8gICB2YXIgJGltZyA9ICQodGhpcyk7XHJcbi8vICAgdmFyIGltZ0NsYXNzID0gJGltZy5hdHRyKCdjbGFzcycpO1xyXG4vLyAgIHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoJ3NyYycpO1xyXG4vLyAgICQuZ2V0KGltZ1VSTCwgZnVuY3Rpb24oZGF0YSkge1xyXG4vLyAgICAgdmFyICRzdmcgPSAkKGRhdGEpLmZpbmQoJ3N2ZycpO1xyXG4vLyAgICAgaWYodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xyXG4vLyAgICAgICAkc3ZnID0gJHN2Zy5hdHRyKCdjbGFzcycsIGltZ0NsYXNzKycgcmVwbGFjZWQtc3ZnJyk7XHJcbi8vICAgICB9XHJcbi8vICAgICAkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKCd4bWxuczphJyk7XHJcbi8vICAgICBpZighJHN2Zy5hdHRyKCd2aWV3Qm94JykgJiYgJHN2Zy5hdHRyKCdoZWlnaHQnKSAmJiAkc3ZnLmF0dHIoJ3dpZHRoJykpIHtcclxuLy8gICAgICAgJHN2Zy5hdHRyKCd2aWV3Qm94JywgJzAgMCAnICsgJHN2Zy5hdHRyKCdoZWlnaHQnKSArICcgJyArICRzdmcuYXR0cignd2lkdGgnKSlcclxuLy8gICAgIH1cclxuLy8gICAgICRpbWcucmVwbGFjZVdpdGgoJHN2Zyk7XHJcbi8vICAgfSwgJ3htbCcpO1xyXG4vLyB9KTtcclxuXHJcbi8vIE1lbnVcclxuXHJcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnVyZ2VyTWVudUJ1dHRvblwiKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuXHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcclxufSlcclxuXHJcbi8vIEZpbHRlclxyXG5cclxuY29uc3QgZmlsdENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHQtY29udGFpbmVyXCIpO1xyXG5jb25zdCBmaWx0QmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdC1iYWNrXCIpO1xyXG5jb25zdCBmaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW4tZmlsdGVyXCIpO1xyXG5cclxuZmlsdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZmlsdENvbnQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICBmaWx0QmFjay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxufSkiXX0=
