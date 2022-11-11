/***********************************************************************
Write a function called `eliminateType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept a string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with all elements
of the specified type removed.

Examples:

const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
smallEliminate('number'); // ['one', 'two', 'three']
smallEliminate('string'); // [1, 2, 3]

const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
eliminate('number'); // [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
eliminate('object'); // [2, undefined, 'world', true, 3, 'hello', false]


Run tests on just this file by typing `npm test test/01-eliminate-type-spec.js`
on the command line.

***********************************************************************/

function eliminateType(arr) {
  return function slicer(str, copyArr = arr, result = []) {
    if (copyArr.length===0) {
        return result;
    }
    let type = typeof copyArr[0];
    if (type !== str) {
        result.push(copyArr[0]);
        return slicer(str,copyArr.slice(1), result)
    } else {
        return slicer(str,copyArr.slice(1), result)
    }
}
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = eliminateType;
} catch {
  module.exports = null;
}
