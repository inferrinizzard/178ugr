import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import QuestionAnswer from "@material-ui/icons/QuestionAnswerRounded";
import Assignment from "@material-ui/icons/AssignmentRounded";

import Divider from "@material-ui/core/Divider";

export interface ListingProps {
	primary: string;
	secondary?: string;
}

const Listing: React.SFC<ListingProps> = ({ primary, secondary }) => {
	return (
		<ListItem button style={{ borderRadius: ".5em" }}>
			<ListItemText primary={primary} secondary={secondary} />
		</ListItem>
	);
};

export interface BodyProps {}

const Body: React.SFC<BodyProps> = () => {
	return (
		<div style={{ margin: "1em auto" }}>
			<img src="5.jpg" alt="banner" />
			<div>
				<div
					style={{
						width: "calc(50% - 1em)",
						display: "inline-block",
						padding: ".5em",
					}}>
					<Card variant="outlined">
						<CardHeader
							title="Frequently Asked Questions"
							avatar={<QuestionAnswer />}
							titleTypographyProps={{ align: "left", variant: "h5" }}
						/>
						<Divider />
						<CardContent style={{ padding: ".5em" }}>
							<List>
								<Listing primary="What is Undergraduate Research (UGR)?" />
								<Listing primary="How can I get involved?" />
								<Listing primary="How does UGR help me as a graduate applicant?" />
								<Listing primary="Does UGR look good on my resume?" />
								<Listing primary="What sorts of projects are available?" />
							</List>
						</CardContent>
					</Card>
				</div>
				<div
					style={{
						width: "calc(50% - 1em)",
						display: "inline-block",
						padding: ".5em",
					}}>
					<Card variant="outlined">
						<CardHeader
							title="Current Open Positions"
							avatar={<Assignment />}
							titleTypographyProps={{ align: "left", variant: "h5" }}
						/>
						<Divider />
						<CardContent style={{ padding: ".5em" }}>
							<List>
								<Listing
									primary="Physical Lab Sciences - Lab Assistant"
									secondary="Ongoing Application"
								/>
								<Listing
									primary="Video Games Psychology Study"
									secondary="Application available January 14, 2020"
								/>
								<Listing primary="Japanese Post-War History - Independent Project" />
							</List>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Body;
