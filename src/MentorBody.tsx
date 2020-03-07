import React from "react";

import Card from "@material-ui/core/Card";

export interface MentorBodyProps {}

const MentorBody: React.SFC<MentorBodyProps> = () => {
	return (
		<div style={{margin: "1em auto"}}>
			<Card variant="outlined">{"test"}</Card>
		</div>
	);
};

export default MentorBody;
