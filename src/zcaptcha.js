/*
 * This is the sdk template introduced in javascript-sdk-design
 *
 * Template Init
 * ==============
 * This is a template that contains init function
 *
 * To find out more sdk template, please visit javascript-sdk-design homepage
 * https://github.com/huei90/javascript-sdk-design
 */
(function (window) {

    // declare
    var zcaptcha = {};

    // your sdk init function
    zcaptcha.init = function () {
        console.log('Welcome to zetgoo')
        // send http {fingerprint && locate && user arguments && appId} => data | devideId, token => set to cookie

    };

    zcaptcha.reXXX = function () {
      // send http {devideId, token} => data
    }

    // submit tripger callback

    

    zcaptcha.getToken = function () {
      var temp = document.cookie;
      console.log(temp)
    }

    zcaptcha.setToken = function () {
      document.cookie = "zcaptcha_token=zetgoo";
    }

    // define your namespace myApp
    window.zcaptcha = zcaptcha;

})(window, undefined);
