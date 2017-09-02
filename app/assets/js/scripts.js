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
  if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", orientation, false);
  }else{
    console.log("DeviceOrientationEvent is not supported");
  }

  if ( $('.phone').css('display') == 'block' ) {
    setTimeout(function(){
      $('.phone').addClass('bigly');
      $('.main').addClass('darkTheme');
    }, 6500);
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





