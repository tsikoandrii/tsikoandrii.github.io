var app = new Vue({
  el: '#app',
  data: {
  	a : 0,
  	sum1: 0,
    sum2: 0,
    sum3: 0,
    sum4: 0,
    block: 500,
    block1: 0,
    dfBlock: 600,
    dfBlock1: 0,
    interBlock: 700,
    interBlock1: 0,
    videoBlock: 1000,
    videoBlock1: 0,
    form: 300,
    form1: 0,
    slider: 600,
    slider1: 0,
    modalWindow: 300,
    modalWindow1: 0,
    mobileAdaptive: 1800,
    mobileAdaptive1: 0,
    tabletAdaptive: 900,
    tabletAdaptive1: 0,
    responsive: 500,
    responsive1: 0,
    seen: true,
    seen1: false,
  },
  methods : {
  	sum: function () {
  		Number(app.block1);
  		Number(app.mobileAdaptive1);
  		Number(app.tabletAdaptive1);
		  app.sum1 =  app.block1 * app.block + app.dfBlock * app.dfBlock1;
  		app.sum1 = app.sum1 + (app.interBlock1 * app.interBlock + app.form * app.form1);
  		app.sum1 = app.sum1 + (app.slider1 * app.slider + app.modalWindow1 * app.modalWindow);
  		app.sum1 = app.sum1 + (app.mobileAdaptive1 * app.mobileAdaptive + app.tabletAdaptive1 * app.tabletAdaptive);
  		app.sum1 = app.sum1 + (app.responsive * app.responsive1 + app.videoBlock1 * app.videoBlock);
      app.sum2 = app.sum1 / 64.12;
      app.sum3 = app.sum1 / 2.68;
      app.sum4 = app.sum1 / 71.08;
      app.sum2 = app.sum2.toFixed(1);
      app.sum3 = app.sum3.toFixed(1);
      app.sum4 = app.sum4.toFixed(1);
  	},

    click_left: function () {
      app.seen1 = false;
      app.seen = true;
      
    },
    click_right: function () {
      app.seen = false;
      app.seen1 = true;
    }
  }
});



