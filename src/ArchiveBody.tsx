import React from "react";

import Card from "@material-ui/core/Card";

export interface ArchiveBodyProps {}

const ArchiveBody: React.SFC<ArchiveBodyProps> = () => {
	return (
		<div style={{margin: "1em auto"}}>
			<Card variant="outlined">{"test"}</Card>
		</div>
	);
};

export default ArchiveBody;
