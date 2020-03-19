import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filter-actions";

class ListFilters extends React.Component {
     onTextChange = (e) => {
          const text = e.target.value;

          this.props.dispatch(setTextFilter(text));
     };

     render() {
          return (
               <input
                    type="text"
                    className="input"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                    placeholder={"Sök"}
                    autoFocus={true}
               />
          );
     }
}

const mapStateToProps = (state) => {
     // get the filters from Redux state
     return {
          filters: state.filters
     };
};

export default connect(mapStateToProps)(ListFilters); // send it in as props
