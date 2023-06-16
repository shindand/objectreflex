export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };

export function orderByProps(obj, arrChange) {
  let arr = [];

  const objectArray = Object.entries(obj);
  objectArray.forEach(([key, value]) => {
    arr.push({ key: key, value: value });
  });

  let arrSort = arr.sort((x, y) => (x.key > y.key ? 1 : -1));
  let arrSort2 = arrSort;
  let arrSortFinish = [];

  for (let i = 0; i < arrChange.length; i++) {
    arrSortFinish = arrSort.filter((item) => {
      return item.key != arrChange[i];
    });
    arrSort = arrSortFinish;
  }

  for (let i = arrChange.length - 1; i >= 0; i--) {
    for (let k = 0; k < arrSort2.length; k++) {
      if (arrSort2[k].key == arrChange[i]) {
        arrSortFinish.unshift(arrSort2[k]);
      }
    }
  }
  return arrSortFinish;
}

orderByProps(obj, ["name", "level"]);
