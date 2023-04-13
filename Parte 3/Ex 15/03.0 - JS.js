const people = [
    {name: "Effe", age: 39},
    {name: "Fra", age: 49},
    {name: "Andre", age: 42},
    {name: "Filo", age: 2},
    {name: "Enri", age: 21},
    {name: "Bea", age: 99},
    {name: "Steve", age: 69}
];

  //getKey(data) finds the keys of each object and returns only the first one if it is resolved with resolve(keys[0])
function getKey(data) {
    return new Promise((resolve, reject) => {
      const keys = Object.keys(data);
  if (keys.length > 0) {
    resolve(keys[0]);
  } else {
    reject("The object has no keys.");
  }
    });
  }

//write a for loop that iterates inside the people array and call getKey() on each person
getKey()
.then(key => console.log(`The first key of the object is "${key}".`))
.catch(error => console.error(error));