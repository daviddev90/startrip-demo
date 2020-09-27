// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'pin'
}

const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    
    case 'SORT_BY_PIN':
      return {
        ...state,
        sortBy: 'pin'
      }
    
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      }

    default: 
      return state;
  }
};

export default filterReducer;