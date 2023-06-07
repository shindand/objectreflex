export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}


const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export function orderByProps(obj, arrChange){
  
let arr= [];
let obj3 = {};
  
  for (let key in obj) {
  obj3.key = key;
  obj3.value = obj[key];
   arr.push(obj3);
  obj3 = {};
}
const arrSort = arr.sort((x, y) => x.key.localeCompare(y.key));
let arrSortFinish = [];

for (let i = 0; i < arrChange.length; i++) {
   arrSortFinish = arrSort.reduce((acc, item, index) => {
     if (item.key == arrChange[i]){   
       arrSort.splice(i, 0, item);
       arrSort.splice(index + 1 + i, 1);
       return arrSort;
      }
   },0);
}
  return arrSortFinish;
}
  
console.log(orderByProps(obj, ["name", "level"]));