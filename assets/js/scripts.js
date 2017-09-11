/*!
 * bigly
 * 
 * 
 * @author Lucas Lorenzo Pena
 * @version 1.0.0
 * Copyright 2017. ISC licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  var state = 0; //initial, 1 == turned

  var desktopState = 0; // initial is dark.
  var ready = false;

  var scrollMagicController = new ScrollMagic.Controller();

  if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", orientation, false);
  }else{
    console.log("DeviceOrientationEvent is not supported");
  }


  if ( $('.phone').css('display') == 'block' ) { //if desktop
    if ($( window ).height() < 850) {
      console.log('settingScrollmagiv');
      var scene = new ScrollMagic.Scene({
        //triggerElement: '.phone',
        offset: 100 /* offset the trigger 150px below #scene's top */
      }).on('enter', function () {
        console.log("passed trigger");
        toggle(0);
      }).on('leave', function () {
        console.log("passed back");
        toggle(1);
      }).addTo(scrollMagicController);
    }

    setTimeout(function(){
      dark();
      $('.phone').click(function(){
        toggle();
      });
      ready = true;
    }, 6500);
  }

  function toggle(trigger){
    console.log(ready);
    if (ready == false){
      // console.log('exiting');
      return;
    }
    console.log(trigger);
    if (trigger == 1) {
      // console.log('trigger light' );
      invertDark();
      desktopState = 1;
    } else if (trigger == 0) {
      // console.log('trigger dark');
      dark();
      desktopState = 0;
    }
    else if (desktopState == 0) { //if dark make light
      // console.log('making light');
      invertDark();
      desktopState = 1;
    } else if( desktopState == 1){
      //console.log('making dark');
      dark();
      desktopState = 0;
    }


    ready = false;
    setInterval(function(){
      // console.log(ready);
      // console.log('ready');
      ready = true;
    },500);
  }

  function dark(){
    $('.phone').removeClass('ylgib');
    $('.phone').addClass('bigly');

    $('.main').removeClass('lightTheme');
    $('.main').addClass('darkTheme');

    $('body').css('background-color', 'black');
  }
  function invertDark(){
    $('.main').removeClass('darkTheme');
    $('.main').addClass('lightTheme');

    $('.phone').removeClass('bigly');
    $('.phone').addClass('ylgib');

    $('body').css('background-color', 'white');
  }

  function orientation(event){
    // console.log(state);
    if ((event.beta) && (event.beta < 20) ){
      var x = state;
      //alert("Magnetometer: " + event.alpha + ", " + event.beta + ", " + event.gamma + "state:" + state );
      if (state === 0){
         state = 1;
         //change black
        BiglyMobile(true);
      }
    } else {
      state = 0;
      BiglyMobile(false);
    }
  }

  function BiglyMobile(trigger){
    if (trigger === true) {
      setTimeout(function(){
        $(".container").css("display", "none");
        $("#modal").css("display", "flex");
      }, 1025);
    } else {
      $("#modal").css("display", "none");
      $(".container").css("display", "flex");
    }
  }


})(jQuery, window, document);





