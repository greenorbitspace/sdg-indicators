---
# Do not delete this line.
---
{% include custom/cookies.js %}

<script>
// IE detection and warning banner insertion
(function() {
  var ua = window.navigator.userAgent;
  var isIE = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;

  if (isIE) {
    var warningDiv = document.createElement('div');
    warningDiv.id = 'ie-warning';
    warningDiv.style.cssText = 'background: #ffcc00; color: #000; padding: 1em; text-align: center; font-weight: bold;';
    warningDiv.innerHTML = '⚠️ This browser is not supported. Please upgrade to a modern browser like Chrome, Firefox, Edge, or Safari.';
    document.body.insertBefore(warningDiv, document.body.firstChild);
  }
})();

// Override data rounding for Open SDG indicators
opensdg.dataRounding = function(value, context) {
  if (value == null) return value;

  if (context.indicatorId === 'indicator_5-3-2') {
    return Number(value.toPrecision(4));
  } else {
    return Number(value.toPrecision(3));
  }
};
</script>