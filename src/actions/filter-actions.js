// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
     type: "SET_TEXT_FILTER",
     text: text
});

export const setFavouriteFilter = (filterFavourite) => ({
     type: "SET_FAVOURITE_FILTER",
     filterFavourite: filterFavourite
});
