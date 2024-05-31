//01:=>   Object.hasOwn()
//Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.
// Syntax :=>    Object.hasOwn(obj, properties)

const example = { foo: 20, bar: 30 };
for (const name in example) {
  if (Object.hasOwn(example,name)) {
    console.log(name)
  }
}


//02:>   Object.groupBy()

 Object.groupBy(items, callbackFn)

//03:>   Object.is()  checks wheteher two values are equal or not

//Syntax  => Object.is(value1, value2)

//04 Object.keys()     mnethod returns an array with all the keys of the object

//05  Object.values()   method returns an array with all the values of the object.
