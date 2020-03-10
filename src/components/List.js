import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import selectObjects from "../selectors/objectSelector";

import { setFavouriteFilter } from '../actions/filter-actions';

import PersonModal from "./PersonModal"




class List extends React.Component {

	state = {
		selectedPerson: { id: undefined, name : '', email : '', isFavourite : false}, 
		filterFavourite: false
    };


    handleSelectPerson = (person) => {
        this.setState(() => ({
			selectedPerson: person
		}));
		
    }
    
    handleClearSelectedPerson = () => {
		this.setState(() => ({
			selectedPerson: { id: undefined, name : '', email : '', isFavourite : undefined}
		}));
	};

	
	handleFilterFavourite = () => {


		const filterFav = !this.state.filterFavourite;

		
		this.props.dispatch(setFavouriteFilter(filterFav));
		this.setState(() => ({
			filterFavourite: filterFav
		}));
		
		
	};


	

	render() {
        return(
        	<div className="list">
				<div className="list__button-align-right">
					<div className="list__favourites-button" onClick={this.handleFilterFavourite}>Filtrera favoriter</div>
				</div>
				
				{this.props.objects.map((object) => {
					 
						return <ListItem key={object.id} {...object} handleSelectPerson={this.handleSelectPerson}/>;
					
				})}

				<PersonModal
							selectedPerson={this.state.selectedPerson}
							handleClearSelectedPerson={this.handleClearSelectedPerson}

				></PersonModal>
			</div>
        );
        
    }

}



const mapStateToProps = (state) => {
	return {
		objects: selectObjects(state.objects, state.filters)
	};
};



export default connect(mapStateToProps)(List);
