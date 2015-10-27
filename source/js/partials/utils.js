/**
 * Created by rodrigo on 21/10/15.
 */


/*
 * default: Yellow Color
 * primary: Blue Color
 * second: White Color
 */



//'<div ng-if="isShow" style="left: 0;top: 0;margin: 0;font-family: arial, sans-serif;font-weight: bold;visibility: hidden;z-index: 1050;position: absolute;'+position+';width: 100%;height: 100%;">' +
////  '<div style="position: relative;display: inline-block;visibility: visible;font-size: 80%;' + size + color + 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">' +
////  ''+label+'</div></div>'



var internDefault = {
  general:'position: relative;display: inline-block;visibility: visible;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)',
  color: 'background-color: #f9edbe;border: 1px solid #f0c36d',
  size: 'font-size: 80%',
  label: 'Loading...'
};

var externDefault = {
  general: 'margin: 0;visibility: hidden;z-index: 1050;width: 100%;height: 100%',
  position: 'left: 0;top: 0;position: absolute;text-align: center',
  font: 'font-family: arial, sans-serif;font-weight: bold'
};

var templates = {
  template1: {
    intern: internDefault,
    extern: externDefault
  },
  template2: {
    intern: {
      general:'position: relative;display: inline-block;visibility: visible;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)',
      color: 'background-color: #f9edbe;border: 1px solid #f0c36d',
      font: 'font-family: arial, sans-serif;font-weight: bold',
      size: 'font-size: 80%',
      label: 'Loading...'
    },
    extern: {
      general: 'margin: 0;visibility: hidden;z-index: 1050;width: 100%;height: 100%',
      position: 'left: 0;top: 0;position: absolute;text-align: center'
    }
  }


};


var colors =  {
  default: 'background-color: #f9edbe;border: 1px solid #f0c36d;',
  primary: 'background-color: #62a4ff;border: 1px solid #78e5f0;',
  second: 'background-color: #ffe8fe;border: 1px solid #dad6db;',
  dark: 'background-color: #000; border: 1px solid #ccc; color: #fff;'
};

var positions = {
  right: 'text-align: right',
  center: 'text-align: center',
  left: 'text-align: left',
  middle: 'top: 50%; left: 50%'
};

var sizes = {
	lg: 'padding: 20px 50px; font-size:25px;'
};

var fonts = {

};

var defaultValues = {
  color: 'default',
  position: 'center',
  label: 'LOADING..'
};