---
# Do not delete this line.
---
{% include custom/cookies.js %}

 opensdg.dataRounding = function(value, context) {
    if (value == null) {
    return value
  }
 // Round to 4 SF in indicator 5.3.2.
    if (context.indicatorId === 'indicator_5-3-2') {
        return Number(value.toPrecision(4))
       }
    // Otherwise round to 3 SF.
    else {
        return Number(value.toPrecision(3))
    }
};    
