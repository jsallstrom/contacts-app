import React from "react";

const ListItem = ({ id, name, email, isFavourite, handleSelectPerson }) => (
     <div
          className="list-item"
          onClick={(e) => {
               handleSelectPerson({ id, name, email, isFavourite });
          }}
     >
          <p className="list-item__title">{name}</p>
     </div>
);

export default ListItem;
