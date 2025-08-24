// Minimal interactivity for the Hello World page
(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    var button = document.getElementById('action-btn');
    var message = document.getElementById('message');
    if (!button || !message) return;

    button.addEventListener('click', function () {
      var now = new Date();
      var ts = now.toLocaleString(undefined, {
        year: 'numeric', month: 'short', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
      });
      message.textContent = 'Hello from JavaScript! Updated at ' + ts + '.';
    });
  });
})();
