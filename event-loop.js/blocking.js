/**
 * blocking:
 * actually it's the code that's slow.
 * the solution  ?  asychronous callbacks.
 *
 */
//async callbacks & the call stack ?
console.log('hi');
setTimeout(function () {
  console.log('there');
}, 5000);
console.log('JSConfEU');
