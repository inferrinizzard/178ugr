import React from "react";

import Card from "@material-ui/core/Card";

export interface SearchBodyProps {}

const SearchBody: React.SFC<SearchBodyProps> = () => {
	return (
		<div style={{margin: "1em auto"}}>
			<Card variant="outlined">{"Test Search"}</Card>
		</div>
	);
};

export default SearchBody;
