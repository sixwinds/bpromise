var toString = {}.toString;

exports.isFunction = function( o ) {
  return toString.call( o ) === '[object Function]';
};

exports.isObject = function( o ) {
  return toString.call( o ) === '[object Object]';
};
