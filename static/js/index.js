var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.init = function (hook_name, args, cb) {
  $('.chatAndUsersChat').css('width', '20%');
}