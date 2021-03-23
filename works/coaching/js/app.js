$(document).ready(function(){
	$('.program-block').hide();
	$('.program-block').first().show();
	$('.person').hide();
	$('.person').first().show();

	$('.result-program-list li').click(function(e){
		e.preventDefault();
		var target = $(this.querySelector('a')).attr('href');
		$('.result-program-list li').removeClass('active');
		$(this).addClass('active');
		$('.program-block').hide();
		$('.person').hide();
		$(target).show();
		$("."+target.slice(1)).show();
	})
})

$(document).ready(function(){
	$('.program-block').hide();
	$('.program-block').first().show();
	$('.mobile-result-program-list li').hide();
	$('.mobile-result-program-list li').first().show;
	// $('.mobile-result-program-list .person').hide();
	// $('.mobile-result-program-list .person').first().show();

	let index = 0;
	const prev = $(".prev-button")[0];
	const next = $(".next-button")[0];

	function slideFunc(i) {
		var target = $('.mobile-result-program-list li')[i]
		var link = target.getElementsByTagName('a')[0].attributes.href.value;
		$('.mobile-result-program-list li')[i].classList.add("active")
		$(link).addClass('active');
		$('.program-block').hide();
		$('.mobile-program-person .person').hide();
		$(link).show();
		$(".mobile-result-program-list li ."+link.slice(1)).show();
	}

	prev.addEventListener("click", () => {
		$('.mobile-result-program-list li')[index].classList.remove("active")
		if (index === 0) {
			index = $('.mobile-result-program-list li').length - 1;
		} else {
			index = index - 1;
		}
		slideFunc(index);
	})

	next.addEventListener("click", (e) => {
		$('.mobile-result-program-list li')[index].classList.remove("active")
		if (index === ($('.mobile-result-program-list li').length) - 1) {
			index = 0;
		} else {
			index = index + 1;
		}
		slideFunc(index);
	})
})

$(document).ready(function(){
	$("#main-menu").on("click","a", function (event) {
		event.preventDefault(); //опустошим стандартную обработку
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
		$('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
	});
	$('.modal-open').on('click', function(e) {
		e.preventDefault()
		$('#popup-ticket').addClass('show-popup')
	})
	$('.popup-closer').on('click', function(e) {
		e.stopPropagation()
		$('#popup-ticket').removeClass('show-popup')
	})

	var modules = $('.module');
	for (let i = 0; i < modules.length; i++) {
		modules[i].addEventListener('click', () => {
			!modules[i].classList.contains('active') ? modules[i].classList.add('active') : modules[i].classList.remove('active');
		})
	}
})


$(document).ready(function(){
	var q = $('.questions .question');
	for (let i = 0; i < q.length; i++) {
		q[i].querySelector('img[alt="minus"]').addEventListener('click', () => {
			q[i].classList.remove('active');
		})
		q[i].querySelector('img[alt="plus"]').addEventListener('click', () => {
			q[i].classList.add('active')
		})
	}
})

$(document).ready(function(){
	var allButton01 = $('#allButton01')[0];
	var modules01 = $('.hiddenModules01')[0];

	var allButton02 = $('#allButton02')[0];
	var modules02 = $('.hiddenModules02')[0];
	// Handlers
	allButton01.addEventListener('click', function () {
		this.style.display = 'none';
		modules01.classList.add('active');
	})
	allButton02.addEventListener('click', function () {
		this.style.display = 'none';
		modules02.classList.add('active');
	})
})

