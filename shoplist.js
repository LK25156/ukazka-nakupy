export const list = [
  { name: 'Mléko', amount: '1 litr', bought: true },
  { name: 'Rohlíky', amount: '10 ks', bought: false },
  { name: 'Pivo Krušovice', amount: '2 ks', bought: false },
  { name: 'Sýr Eidem', amount: '200 g', bought: true },
  { name: 'Paštika', amount: '1 ks', bought: false },
  { name: 'Máslo', amount: '250 g', bought: true },
];

export const addItem = (name, amount) => {    //fce pro uprav. pole s položkami seznamu, přidání nové položky
  list.push({
    name: name,
    amount: amount,
    bought: false,
  });
};

export const toggleBought = (index) => {    //fce pro označení/odznačení položky jako koupené
  list[index].bought = !list[index].bought;
};

export const deleteItem = (index) => {    //fce pro smazání položky ze seznamu
  list.splice(index, 1);
};


