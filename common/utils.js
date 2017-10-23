// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function thsdDot(num) {
  var retString = num;
  if ( num > 999 ) {
    let dotFill = ".";
    let hundreds = num-Math.floor(num/1000)*1000;
    if ( hundreds < 10 ) {
      dotFill =".00";
    } else if ( hundreds < 100 ) {
      dotFill = ".0";
    }
    retString = Math.floor(num/1000) + dotFill + hundreds;
  }
  return retString;
}

export function monoDigits(digits) {
  var ret = "";
  var str = digits.toString();
  for (var index = 0; index < str.length; index++ ) {
    var num = str.charAt(index);
    ret = ret.concat(hex2a("0x1" + num));
  }
  return ret;
}

export function hex2a(hex) {
  var str = "";
  for (var index = 0; index < hex.length; index += 2 ) {
    var val = parseInt(hex.substr(index, 2), 16);
    if (val) str += String.fromCharCode(val);
  }
  return str.toString();
}
