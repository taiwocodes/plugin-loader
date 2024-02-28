function loadCSS(href) {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

function loadJS(src) {
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}

loadCSS('https://staging.zeepjet.com/zeepjet-main.css');
loadJS('https://staging.zeepjet.com/zeepjet-main.js');