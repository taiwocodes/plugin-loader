function loadCSS(href) {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

function loadJS(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => {
    if (callback) {
      callback();
    }
  };
  document.body.appendChild(script);
}

loadJS('https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.6.0/cleave.min.js', function() {
  console.log('Cleave.js loaded');
});

loadCSS('https://staging.zeepjet.com/zeepjet-main.css');
loadJS('https://staging.zeepjet.com/zeepjet-main.js');
