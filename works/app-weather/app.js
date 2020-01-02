'use strict';
let btn = document.querySelector('#menuToggle');
let btn2 = document.querySelector('#menuToggle2');
let menu = document.querySelector('.another');
let main = document.querySelector('main');
let search = document.querySelector('#search');
let search_btn = document.querySelector('.search_btn')

let name = document.querySelector('.name');
let temp = document.querySelector('.temp');
let icon = document.querySelector('.iconBlock');
let sky = document.querySelector('#sky');
let mainData = document.querySelector('.main_data');
let time = document.querySelector('.time');
let day = document.querySelector('.day');
let date1 = document.querySelector('.date1')
let cloudy = document.querySelector('#cloudy');
let hum = document.querySelector('#hum');
let wind = document.querySelector('#wind');

let currentDate = new Date();
let minute = `currentDate.getMinutes()`;
if (minute < 9) {
	minute = `0${currentDate.getMinutes()}`
} else {
	minute = `${currentDate.getMinutes()}`
}
let month = '';
function autoDate() {
	time.innerHTML = `${currentDate.getHours()}:${minute} -&nbsp`;
	switch (currentDate.getDay()) {
		case 1:
			day.innerHTML = `Понеділок, &nbsp`;
			break
		case 2: 
			day.innerHTML = `Вівторок, &nbsp`;
			break
		case 3: 
			day.innerHTML = `Середа, &nbsp`;
			break
		case 4: 
			day.innerHTML = `Четвер, &nbsp`;
			break
		case 5: 
			day.innerHTML = `П'ятниця, &nbsp`;
			break
		case 6: 
			day.innerHTML = `Субота, &nbsp`;
			break
		case 787: 
			day.innerHTML = `Неділя, &nbsp`;
			break
	}
	switch (currentDate.getMonth()) {
		case 0: 
			month = 'Січня'
			break
		case 1: 
			month = 'Лютого'
			break
		case 2:
			month = 'Березня'
			break
		case 3: 
			month = 'Квітня'
			break
		case 4: 
			month = 'Травня'
			break
		case 5: 
			month = 'Червня'
			break
		case 6: 
			month = 'Липня'
			break
		case 7: 
			month = 'Серпня'
			break
		case 8: 
			month = 'Вересня'
			break
		case 9: 
			month = 'Жовтня'
			break
		case 10: 
			month = 'Листопада'
			break
		case 11: 
			month = 'Грудня'
			break
			
	}
	date1.innerHTML = `${currentDate.getDate()} ${month} ${currentDate.getFullYear()}`;
}

btn.onclick = () => {
	menu.classList.toggle('show');
	btn.classList.toggle('unseen');
	btn2.onclick = () => {
		menu.classList.toggle('show');
		btn.classList.toggle('unseen');
	}
}

search_btn.onclick = () => {
	let city = search.value;
	city = city.trim();
	if (city == '') {
		city = 'Богодухів';
	}
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea8b14295974e31505e14a1478fdb8e1`)
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {
			console.log(data);
			console.log(data.clouds.all)
			autoDate();
			name.textContent = `${city}`;
			temp.innerHTML = `${Math.round(data.main.temp - 273)}&deg`;
			sky.textContent = data.weather[0]['description'];
			icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="icon" class="icon">`
			cloudy.textContent = `${data.clouds.all}%`;
			hum.textContent = `${data.main.humidity}%`;
			wind.textContent = `${data.wind.speed}м/с`;
		})
		.catch(function () {
			// body...
		});
}





// 