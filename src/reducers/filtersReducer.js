const filtersReducerDefaultState = {
     text: "",
     filterFavourite: false
}; // can also be more complex

// If we dont make this export we would maybe have to do an export, import and use like this filtersReducer.filtersReducer();
export default (state = filtersReducerDefaultState, action) => {
     switch (action.type) {
          case "SET_TEXT_FILTER":
               return { ...state, text: action.text };
          // copy of state BUT  update the single field of text in state
          case "SET_FAVOURITE_FILTER":
               return { ...state, filterFavourite: action.filterFavourite };

          default:
               return state;
     }
}; //  now with the defaultstate in place we can start adding actions that will change the state in the switch
