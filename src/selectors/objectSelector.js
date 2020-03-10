

export default (objects, { text, filterFavourite}) => {
	
	// will sort out which objects from our object array to show

	return objects
		.filter((object) => {
			
			const textMatch = object.name.toLowerCase().includes(text.toLowerCase());

			const favouriteMatch = filterFavourite ? object.isFavourite : true;

			return textMatch && favouriteMatch;
		});
		
		
		
	
	
};
