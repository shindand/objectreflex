export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
let arr= [];
let obj3 = {};

for (key in obj) {
  obj3.key = key;
  obj3.value = obj[key];
   arr.push(obj3);
  obj3 = {};
}
arr.sort((x, y) => x.key.localeCompare(y.key));
  
arr.reduce((acc, item, index) => {
  if (item.key == 'name'){
    arr.splice(0, 0, item);
    arr.splice(index + 1, 1);
  }
},0);
  arr.reduce((acc, item, index) => {
  if (item.key == 'level'){
    arr.splice(1, 0, item);
    arr.splice(index + 1, 1);
  }
},0);

  console.log(arr);