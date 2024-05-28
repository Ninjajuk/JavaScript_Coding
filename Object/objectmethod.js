//01:=>   Object.hasOwn()
//Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.
// Syntax :=>    Object.hasOwn(obj, properties)

const example = { foo: 20, bar: 30 };
for (const name in example) {
  if (Object.hasOwn(example,name)) {
    console.log(name)
  }
}