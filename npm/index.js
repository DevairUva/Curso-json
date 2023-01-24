// const lodash = require("lodash");

// console.log(lodash.isArray([]));
// console.log(lodash.kebabCase("Devair Martins"));

const str = `{
  'name': 'Devair Martins',
  'job': 'RV',
  'technologies': ['html', 'js', 'css'],
  'wroking': true,
  'yearsOfExperience': 10,
  'website': null
}`

console.log(str);

const obj = JSON.parse(str);

console.log(obj);

// const str = `{
//   "name": "Devair Martins",
//   "job": "RV",
//   "technologies": ["html", "js", "css"],
//   "wroking": true,
//   "yearsOfExperience": 10,
//   "website": null
// }`
// undefined
// str
// '{\n  "name": "Devair Martins",\n  "job": "RV",\n  "technologies": ["html", "js", "css"],\n  "wroking": true,\n  "yearsOfExperience": 10,\n  "website": null\n}'
// const obj = JSON.parse(str)
// undefined
// obj
// {name: 'Devair Martins', job: 'RV', technologies: Array(3), wroking: true, yearsOfExperience: 10, …}job: "RV"name: "Devair Martins"technologies: (3) ['html', 'js', 'css']website: nullwroking: trueyearsOfExperience: 10[[Prototype]]: Object
// const str2 = JSON.stringify(obj)
// undefined
// str2
// '{"name":"Devair Martins","job":"RV","technologies":["html","js","css"],"wroking":true,"yearsOfExperience":10,"website":null}'