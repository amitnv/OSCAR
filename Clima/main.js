chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('weather.html', {
    id: 'weather',
    innerBounds: {
      height: 550,
      width: 350,
    },
    resizable: false
  });
});
