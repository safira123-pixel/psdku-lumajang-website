export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function () {
    // According to the last trigger time interval
    const last = +new Date() - timestamp;

    // The time interval last when the wrapped function was called is less than the set time interval wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // If it is set to immediate===true, there is no need to call here because the start boundary has already been called
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // If the delay does not exist, reset the delay
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}
// According to an attribute value, find the menuItem with the attribute value from the MenuList
export function getMenuItemInMenuListByProperty(menuList, key, value) {
  let stack = [];
  stack = stack.concat(menuList);
  let res;
  while (stack. length) {
    let cur = stack. shift();
    if (cur. children && cur. children. length > 0) {
      stack = cur. children. concat(stack);
    }
    if (value === cur[key]) {
      res = cur;
    }
  }
  return res;
}

/**
 * @description Convert timestamp to year-month-day-hour-minute-second format
 * @param {String} timestamp
 * @returns {String} year-month-day-hour-minute-second
 */

export function timestampToTime(timestamp) {
  var date = new Date(timestamp);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
 
  let strDate = Y+M+D+h+m+s;
  return strDate;
}