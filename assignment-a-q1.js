/*

Suppose you have a nested object like this.
{foo: {num: 2}, bar: {num: -1}, buz: {num: null}, qux: {}, quux: null}

Make a function that converts the object to an array like below.
[{num: 2}, {num: -1}]

The function has to meet the criteria below
- Maps values of an given objects to an array
- If a value of the object is not an object, remove it from output
- If a value of the object is an object which does not have a key num, remove it from output
- If a value of num is not a number, remove it if from output

*/

import _ from 'lodash'

// solution 1 - without lodash
const convertObjToArr = (obj) => {
  const arr = []

  for (let key in obj) {
    if (obj[key] && typeof obj[key]['num'] == 'number') {
      arr.push(obj[key])
    }
  }

  return arr
}

console.log(
  'solution 1:',
  convertObjToArr({
    foo: { num: 2 },
    bar: { num: -1 },
    buz: { num: null },
    qux: {},
    quux: null,
  })
)

// solution 2 - with lodash
const convertObjToArr2 = (obj) => {
  return _.filter(obj, (value) => !_.isNull(value) && _.isNumber(value['num']))
}

console.log(
  'solution 2:',
  convertObjToArr2({
    foo: { num: 2 },
    bar: { num: -1 },
    buz: { num: null },
    qux: {},
    quux: null,
  })
)
