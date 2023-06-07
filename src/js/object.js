const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }
  export function destructor(massiv){
      let arr = [];
      for (let i = 0; i < massiv.length; i++) {
        let {id, name, icon, description} = character.special[i];
          if (description == undefined) {
      description = 'default';
    };
        arr.push({id, name, icon, description});
        
      }
      return arr;
    }

  console.log(destructor(character.special));
  