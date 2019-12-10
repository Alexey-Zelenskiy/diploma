const coffeeLoaded = (newMenu) => {
  return {
    type: 'COFFEE_LOADED',
    payload: newMenu
  }
};

const ourCoffeeLoaded = (newMenu) => {
  return {
    type: 'OUR_COFFEE_LOADED',
    payload: newMenu
  }
};

const pleasureCoffeeLoaded = (newMenu) => {
  return {
    type: 'PLEASURE_COFFEE_LOADED',
    payload: newMenu
  }
};


const coffeeRequested = () => {
  return {
    type: 'COFFEE_REQUESTED'
  }
};

const coffeeError =()=>{
  return {
    type:'COFFEE_ERROR'
  }
};

const coffeeFilter = (value) => {
  return {
    type: 'COFFEE_FILTER',
    payload: value
  }
};
const getSeparateCoffeeItem = (id) => {
  return {
    type: 'GET_SEPARATE_COFFEE_ITEM',
    payload: id
  }
};

export {
  coffeeLoaded,
  coffeeRequested,
  coffeeError,
  ourCoffeeLoaded,
  coffeeFilter,
  pleasureCoffeeLoaded,
  getSeparateCoffeeItem
}