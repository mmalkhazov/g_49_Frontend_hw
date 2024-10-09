const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

// task_01
// Создайте на основе старого массива новый массив объектов по образу: 
// [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]

// a.стрелочная функция
const starWarsHeroesNameAndIsJedi= starWarsHeroes.map(starWarHeroe => ({
    
    name:starWarHeroe.name,
    isJedi:starWarHeroe.isJedi,
 }));
 console.log('стрелочная функция')
 console.log(starWarsHeroesNameAndIsJedi)

 // b. function declaration

 function modifiedStarWarsHeroesArray(starWarHeroes){
    return starWarHeroes.map(starWarHeroe=>({
        name:starWarHeroe.name,
    isJedi:starWarHeroe.isJedi,
    }))
 }

 const modifiedArray=modifiedStarWarsHeroesArray(starWarsHeroes);
 console.log('function declaration')
 console.log(modifiedArray)


 // task_02
//Создайте новый массив с джедаями младше 40 лет

// a.стрелочная функция

const starWarsJedisUnderFourtyYear = starWarsHeroes.filter(starWarsHeroe=>starWarsHeroe.age <40 && starWarsHeroe.isJedi===true)

console.log('стрелочная функция')
console.log('The array of Jedis under the 40 age')
console.log(starWarsJedisUnderFourtyYear)


 // task_03
//Посчитайте возраст всех джедаев
const totalJediAge=starWarsHeroes
.filter(starWarsHeroe=>starWarsHeroe.isJedi)
.reduce((sum, jedi) => sum + jedi.age, 0);


console.log('The total age of Jedis:',totalJediAge)

// task_04
//Повысьте возраст героев на 10 лет

function increaseAge(starWarsHeroes) {
    for (let i = 0; i < starWarsHeroes.length; i++) {
        starWarsHeroes[i].age += 10;
    }
    return starWarsHeroes; 
  }
  
  const increasedAges = increaseAge(starWarsHeroes);
  
  console.log("Heroes with increased age by 10 years:", increasedAges);

  
// task_05
// Создайте новый массив, где "Anakin Skywalker" заменен на
//  { name: "Darth Vader", isJedi: false, age: 50 }

const updatedStarWarsHeroes = starWarsHeroes.map(starWarsHeroe => {
    if (starWarsHeroe.name === "Anakin Skywalker") {
      return { name: "Darth Vader", age: 50, isJedi: false };
    }
    return starWarsHeroe;
  });
  
  console.log("The array changed by Darth Vader:", updatedStarWarsHeroes);