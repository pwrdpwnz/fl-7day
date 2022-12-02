function clientSpy(d, w, callback) {
  var _obj = {title: d.title, url: w.location.href, pathname: w.location.pathname};

  /*
  if (w.location.pathname == '/') {
    var left_exchange = $('.custom-scroll_inner').find('.active').attr('data-name');
    var right_exchange = $('#redz_right_col_html').find('.active').attr('data-name');
    _obj.title += ' ('+ left_exchange +' => '+ right_exchange +')';
  }
  */

  if (_obj.url.indexOf('https://unicash.pro/hst_') >= 0) {
    var temp = $('.block_payinfo_line').first().text().trim().split(': ');
    temp = temp[1].split(',');
    temp = temp[0].split(' ');
    temp.splice(0,1);
    var first_exc = temp.join(' ');

    var temp = $('.block_payinfo_line').last().text().trim().split(': ');
    temp = temp[1].split(',');
    temp = temp[0].split(' ');
    temp.splice(0,1);
    var last_exc = temp.join(' ');

    _obj.title = $('#the_title_page').text().trim() + ' ('+ first_exc +' => '+ last_exc +')';
  }

  callback(_obj);
}

function getDirection() {
  var t1 = $('#step-chage-inde1').find('.name').text();
  var t2 = $('#step-chage-inde2').find('.name').text();

  return [t1, t2];
}

function attachFormActions(sock) {
  var _timeout;
  var not_blocked = true;
  var interval = setInterval(() => {
    if ($('.step-form input[type=text]').length) {
      $('.step-form input[type=text]').focus(() => {
        var t = getDirection();
        sock.emit('clientFocusForm', {t1: t[0], t2: t[1]});
      });


      $('.step-form input[type=text]').blur(() => {
        var t = getDirection();
        sock.emit('clientBlurForm', {t1: t[0], t2: t[1]});
      });

      $('.step-form input[type=text]').keyup(() => {
        if (not_blocked) {
          sock.emit('clientStartTypingForm');
          not_blocked = false;
          _timeout = setTimeout(() => {
            sock.emit('clientEndTypingForm');
            not_blocked = true;
          }, 10000);
        }
      });

      clearInterval(interval);
    }
  }, 300);
}

$(document).ready(() => {
  var socket = io('https://mandarinsport.ru', {transports: ['websocket'], upgrade: false});

  socket.on('connect', () => {
    socket.emit('checkUUID', {uuid: localStorage.getItem('unispy_uuid')});

    clientSpy(document, window, obj => {
      socket.emit('clientSpy', obj);
    });
  });

  socket.on('setUUID', data => {
    localStorage.setItem('unispy_uuid', data.uuid);
  });

  if (window.location.pathname == '/' || window.location.pathname.indexOf('/exchange-') >= 0) {
    var intervalChecker;
    var lSelector = '#from',
        rSelector = '#to';

    attachFormActions(socket);

    if (window.location.pathname.indexOf('/exchange-') >= 0) {
      lSelector = '#from';
      rSelector = '#to';

      setTimeout(() => {
        var t = getDirection();
        socket.emit('clientUpdateTitle', {title: 'Обмен — '+ t[0] +' => '+ t[1]});
      }, 5000);
    }

    var intervalDirection = setInterval(() => {
      var le = $(lSelector).find('div.active').attr('data-name');
      var re = $(rSelector).find('div.active').attr('data-name');
      if (le && re) {

        $('.js_item_right_redz').click(() => {
          setTimeout(() => {
            var le = $(lSelector).find('div.active').attr('data-name');
            var re = $(rSelector).find('div.active').attr('data-name');

            socket.emit('clientUpdateTitle', {title: 'Обмен — '+ le +' => '+ re});
          }, 300);
        });

        $('.js_item_left_redz').click(() => {
          clearInterval(intervalChecker);
          intervalChecker = setInterval(() => {
            var le = $(lSelector).find('div.active').attr('data-name');
            var re = $(rSelector).find('div.active').attr('data-name');

            if (le && re) {
              clearInterval(intervalChecker);

              $('.js_item_right_redz').click(() => {
                setTimeout(() => {
                  var le = $(lSelector).find('div.active').attr('data-name');
                  var re = $(rSelector).find('div.active').attr('data-name');

                  socket.emit('clientUpdateTitle', {title: 'Обмен — '+ le +' => '+ re});
                }, 300);
              });

              socket.emit('clientUpdateTitle', {title: 'Обмен — '+ le +' => '+ re});
            }
          }, 1000);
        });

        socket.emit('clientUpdateTitle', {title: 'Обмен — '+ le +' => '+ re});
        clearInterval(intervalDirection);
      }

    }, 1000);
  }
});
