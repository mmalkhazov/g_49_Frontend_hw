// task_01
console.log("Task 01");
const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

console.log(names);
console.log(ages);

const peoples = [];

for (let i = 0; i < names.length; i++) {
  peoples.push(`name: ${names[i]}, age: ${ages[i]}`);
}

console.log(peoples);
console.log("----");

// task_02
console.log("Task 02");
const reversedPeoples = [];
for (let i = peoples.length - 1; i >= 0; i--) {
  // reversedPeoples.push(`name: ${peoples[i].name}, age: ${peoples[i].age}`);
  reversedPeoples.push(peoples[i]);
}

console.log(reversedPeoples);
console.log("----");

// task_03
console.log("Task 03");
const countries = [];
console.log(countries);
countries.push("Франция");
countries.push("Германия");
countries.push("Италия");
console.log(countries);

const deletedCountry = countries.pop();
console.log(deletedCountry);

countries.unshift(deletedCountry);
console.log(countries);
console.log("----");

// task_04
console.log("Task 04");

// Создайте объект car с ключами brand, model, year, и isElectric. Задайте им значения. 
const car = {
  brand: "Opel",
  model: "Astra",
  year: 1991,
  isElectric: true,

   // Добавьте в объект car метод getCarInfo, который будет возвращать строку, содержащую информацию о марке, модели и году выпуска машины. 
  getCarInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  },
};

console.log(car);
// Выведите на экран все ключи объекта 
console.log("The Keys of the car:", Object.keys(car));

// Выведите на экран все значения объекта
console.log("The Values of the car:", Object.values(car));

// Вызовите этот метод и выведите результат на экран.
console.log(car.getCarInfo());

// выполните итерацию по ключам с помощью цикла for...in. 
// Внутри цикла выводите на экран каждую пару ключ: значение. 
// Затем модифицируйте вывод, чтобы он выглядел как: "Ключ: [ключ], Значение: [значение]". Например, "Ключ: brand, Значение: Toyota".
for (const [key, value] of Object.entries(car)) {
  if (typeof value !== "function") {
    console.log(`Key: ${key}, Value: ${value}`);
  }
}
