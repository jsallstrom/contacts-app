import uuid from "uuid"; // this is just a tool to create unique ids, if we use mongo db we can use its id creating rather

// Action generators for objects

export const addObject = ({ name = "", email = "", isFavourite = false } = {}) => ({
     type: "ADD_OBJECT",
     object: {
          id: uuid(),
          name: name,
          email: email,
          isFavourite: isFavourite
     }
});

export const editObject = (id, updates) => ({
     type: "EDIT_OBJECT",
     id: id,
     updates: updates
});
