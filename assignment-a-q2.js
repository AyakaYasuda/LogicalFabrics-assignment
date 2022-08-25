/*

Suppose you have an array like this.
[{foo: 1}, {bar: 2}, {foo: -2}, {foo: 3, bar: 4}]

Make a function that converts the array to an object like
{foo: 2, bar: 6}

What the function does is to sum up numbers by key-name. 
In the case above, foo = 1 - 2 + 3 = 2 , bar = 2 + 4 = 6, so {foo: 2, bar: 6}.

Note that the function should accept an object having any key-name - that means keys are not only foo and bar, but anything.
You may assume that each item in the given array is an object, and its values are always a number.

*/

import _ from 'lodash'

// solution 1 - without lodash
const sumValues = (arr) => {
  const map = {}
  for (let element of arr) {
    for (let key in element) {
      map[key] = map[key] ? map[key] + element[key] : element[key]
    }
  }
  return map
}

console.log(
  sumValues([{ foo: 1 }, { bar: 2 }, { foo: -2 }, { foo: 3, bar: 4 }])
)

// solution 2 - without lodash
const sumValues2 = (arr) => {
  const map = {}
  _.forEach(arr, (value) =>
    _.forIn(value, (value, key) => {
      map[key] = map[key] ? map[key] + value : value
    })
  )

  return map
}

console.log(
  sumValues2([{ foo: 1 }, { bar: 2 }, { foo: -2 }, { foo: 3, bar: 4 }])
)

// answer example
const fn = (input) =>
  input.reduce((res, v) => {
    _.keys(v).forEach((k) => {
      res[k] |= 0
      res[k] += v[k]
    })
    return res
  }, {})

console.log(fn([{ foo: 1 }, { bar: 2 }, { foo: -2 }, { foo: 3, bar: 4 }]))
