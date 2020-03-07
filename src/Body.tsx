import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export interface BodyProps {}

const Body: React.SFC<BodyProps> = () => {
	return (
		<div>
			<img src="5.jpg" alt="banner" />
			<div>
				<Card
					variant="outlined"
					style={{width: "40%", display: "inline-block"}}>
					<CardHeader title="Frequently Asked Questions" />
					<CardContent>
						<List>
							<ListItem>
								<ListItemText primary="test 1" secondary="test 2" />
							</ListItem>
						</List>
					</CardContent>
				</Card>
				<Card
					variant="outlined"
					style={{width: "40%", display: "inline-block"}}>
					<CardHeader title="Current Open Positions" />
					<CardContent>
						<List>
							<ListItem>
								<ListItemText primary="test 1" secondary="test 2" />
							</ListItem>
						</List>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Body;
