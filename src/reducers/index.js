const initialState = {
  coffee: [],
  loading: true,
  error: false,
  filterValue:null,
  ourCoffee:[],
  pleasureCoffee:[]
};

const reducer = (state = initialState, action) => {

  const {type, payload} = action;

  console.log(state);
  switch (type) {
    case 'COFFEE_LOADED':
      return {
        ...state,
        coffee: payload.map(item => {
          return {
            ...item
          }
        }),
        loading: false,
        error: false
      };
    case 'OUR_COFFEE_LOADED':
      return {
        ...state,
        ourCoffee: payload.map(item => {
          return {
            ...item
          }
        }),
        loading: false,
        error: false
      };
    case 'PLEASURE_COFFEE_LOADED':
      return {
        ...state,
        pleasureCoffee: payload.map(item => {
          return {
            ...item
          }
        }),
        loading: false,
        error: false
      };
    case 'COFFEE_REQUESTED':
      return {
        ...state,
        loading: true
      };
    case 'COFFEE_ERROR': {
      return {
        ...state,
        error: true,
        loading: true
      }
    }
    case 'COFFEE_FILTER':
      return {
        ...state,
        filterValue: payload
      };
    case 'GET_SEPARATE_COFFEE_ITEM':
      return {
        ...state,
        itemId: payload
      };
    default:
      return state;
  }
};

export default reducer;