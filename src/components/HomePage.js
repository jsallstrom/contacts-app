import React from "react";
import ListFilters from "./ListFilters";
import List from "./List";

const HomePage = () => (
     <div className="home-page">
          <div className="container">
               <h1 className="container__title">Contacts</h1>
               <ListFilters></ListFilters>
               <List></List>
          </div>
     </div>
);

export default HomePage;
