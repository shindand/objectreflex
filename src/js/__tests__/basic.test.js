import {sum, orderByProps} from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});


test('massiv', () => {
  const testOrder = [{
    key: "name",
    value: "мечник"
  }, 
  {
    key: "level",
    value: 2
  },
   {
    key: "attack",
    value: 80
  }, 
   {
    key: "defence",
    value: 40
  }, 
  {
    key: "health",
    value: 10
  }];
  
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

  const result = orderByProps(obj, ["name", "level"]); 

  expect(result).toEqual(testOrder);
});


