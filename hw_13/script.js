// task_01
// Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива.

function arrayToMap(array) {
  return array.reduce((acc, item) => {
    acc[item] = item;
    return acc;
  }, {});
}

const result = arrayToMap(["a", 36.6, "John Doe"]);
console.log(result);

// task_02
// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение.

function arrayOfPairsToMap(array) {
  return array.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

const result1 = arrayOfPairsToMap([
  ["height", 170],
  ["weight", 80],
  ["sport", "regbi"],
  ["full name", "John Doe"],
  ["sing", "love"],
  ["speed", 90],
]);
console.log('task_03')
console.log(result1);

// task_03
// Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.

function objectToString(object) {
  return Object.values(object).join(", ");
}

const result2=objectToString({ a: "a", 36.6: 36.6, "John Doe": "John Doe" })
console.log('task_03')
console.log(result2);

// task_04
// Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы.

function mapToObject(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[key] = typeof value;
      return acc;
    }, {});
  }

  const result3=mapToObject({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' })
  console.log('task_04')
  console.log(result3); 


// task_04*
//  Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который содержит все свойства исходного обьетка, но значения свойств - это объект содержащий исходное значение, и его тип.

function mapToObject1(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[key] = { value, type: typeof value }; // Заполняем новый объект свойствами
      return acc;
    }, {});
  }
  
  const result4=mapToObject1({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' })
  console.log('task_04*')
  console.log(result4); 