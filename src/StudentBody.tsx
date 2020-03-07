import React from "react";

import Card from "@material-ui/core/Card";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MenuList from "@material-ui/core/MenuList";

export interface StudentBodyProps {}

const StudentBody: React.SFC<StudentBodyProps> = () => {
	return (
		<div style={{margin: "1em auto"}}>
			<Card variant="outlined" style={{width: "20%", display: "inline-block"}}>
				<ExpansionPanel>
					<ExpansionPanelSummary>Test</ExpansionPanelSummary>
					<ExpansionPanelDetails>Test</ExpansionPanelDetails>
					<ExpansionPanelDetails>Test</ExpansionPanelDetails>
					<ExpansionPanelDetails>Test</ExpansionPanelDetails>
					<ExpansionPanelDetails>Test</ExpansionPanelDetails>
				</ExpansionPanel>
			</Card>
			<div style={{width: "79%", display: "inline-block"}}>{"Test"}</div>
		</div>
	);
};

export default StudentBody;
