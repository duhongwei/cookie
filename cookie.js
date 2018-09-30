//author : duhongwei

function parseExpire(expire) {
  var key = expire.substring(expire.length - 1, expire.length)
  var value = expire
  if (!/\d/.test(key)) {
    value = expire.substring(0, expire.length - 1)
    switch (key) {
      case 'd':
        value *= 24 * 60 * 60 * 1000
        break;
      case 'm':
        value *= 30 * 24 * 60 * 60 * 1000
        break;
      case 'y':
        value *= 365 * 24 * 60 * 60 * 1000
        break;
      default:
        throw new Error('unsupport ' + key)
    }
  }
  if (typeof value !== 'number') {
    throw new Error('invalid expires')
  }
  return value
}

function get(key) {
  var a, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
  if (a = document.cookie.match(reg)) {
    return decodeURIComponent(a[2]);
  }
  else {
    return "";
  }
}
function set(key, value, opts = {}) {
  key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
  key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
  value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);

  if (opts.expires !== 0) {
    opts.expires = parseExpire(opts.expires || '1m')
  }
  if (opts.path !== '') {
    opts.path = opts.path || '/'
  }
  var now = new Date();
  now.setTime(now.getTime() + opts.expires);
  var cookieString = key + "=" + value
  if (opts.expires) {
    cookieString += ";expires=" + now.toUTCString()
  }
  if (opts.path) {
    cookieString += ";path=" + opts.path
  }
  if (opts.domain) {
    cookieString += ";domain=" + opts.domain
  }
  if (opts.secure) {
    cookieString += ";secure"
  }
  document.cookie = cookieString

}
function remove(key) {
  set(key, '', {
    expires: -3600000 * 24 * 365
  })
}
function has(key) {
  return !!get(key)
}
export default {
  get,
  set,
  has,
  remove
}
