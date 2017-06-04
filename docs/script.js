require(['gitbook', 'jQuery'], function (gitbook, $) {
  var base = "/docs/";
  function updateIndexHref() {
      var href = window.location.href;
      var basePath = href.substr(0, href.indexOf(base));
      console.log(basePath);
      $(document).ready(function () {
          $('a').not('[href^="http"],[href^="https"],[href^="mailto:"]').each(function () {
              $(this).attr('href', function (index, value) {

                  if (value.slice(-1) === "/") {
                      value = basePath + base + value + "index.html";
                  }
                  else if (value.indexOf('.html') > -1 && value.indexOf('file://') === -1) {
                    if (value.substr(0, 2) === '..') {
                      value = basePath + base + value.substr(2);
                    }
                    else if (value.substr(0, 1) === '.' && href !== basePath + base + 'index.html') {
                      var newPath = href.substr(0, href.lastIndexOf("/"));
                      value = newPath + "/" + value;
                      console.log('backwards!', value)
                    }
                    else if (value.substr(0, 1) === '.') {

                    }
                    else {
                      var newPath = href.substr(0, href.lastIndexOf("/"));
                      value = newPath + "/" + value;
                    }
                  }
                  console.log(value);
                  return value;
              });
          });
      });
  }

  gitbook.events.bind('start', function () {
    console.log('start')
    updateIndexHref();
  });

  gitbook.events.bind('page.change', function () {
    console.log('page.change')
    updateIndexHref();
  });

});
