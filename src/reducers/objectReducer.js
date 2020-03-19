const defaultState = [];

export default (state = defaultState, action) => {
     switch (action.type) {
          case "ADD_OBJECT":
               return [...state, action.object];

          case "EDIT_OBJECT":
               return state.map((object) => {
                    if (object.id === action.id) {
                         return { ...object, ...action.updates };
                    } else {
                         return object;
                    }
               });

          default:
               return state;
     }
};
