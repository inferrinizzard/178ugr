import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import QuestionAnswer from "@material-ui/icons/QuestionAnswerRounded";
import Assignment from "@material-ui/icons/AssignmentRounded";

import Divider from "@material-ui/core/Divider";

interface SectionProps {
	left?: boolean;
	title: string;
}

const Section: React.SFC<SectionProps> = ({ left, title, children }) => {
	return (
		<div
			style={{
				verticalAlign: "top",
				width: "calc(50% - 1em)",
				display: "inline-block",
				padding: ".5em",
			}}>
			<Card variant="outlined">
				<CardHeader
					title={title}
					avatar={left ? <QuestionAnswer /> : <Assignment />}
					titleTypographyProps={{
						align: "left",
						variant: "h5",
					}}
				/>
				<Divider />
				<CardContent style={{ padding: ".5em" }}>
					<List> {children} </List>
				</CardContent>
			</Card>
		</div>
	);
};

export interface ListingProps {
	primary?: string;
	secondary?: string;
	to: string;
}

const Listing: React.SFC<ListingProps> = ({ primary, secondary, to }) => {
	return (
		<ListItem button dense={!primary} component={Link} to={to} style={{ borderRadius: ".5em" }}>
			<ListItemText primary={primary} secondary={secondary} />
		</ListItem>
	);
};

export interface MainBodyProps {}

const MainBody: React.SFC<MainBodyProps> = () => {
	return (
		<div style={{ margin: "1em auto" }}>
			<img src="5.jpg" alt="banner" style={{ width: "100%", borderRadius: ".5em" }} />
			<div>
				<Section left title="Frequently Asked Questions">
					<Listing primary="What is Undergraduate Research (UGR)?" to="students#faq1" />
					<Listing primary="How can I get involved?" to="students#faq4" />
					<Listing primary="How does UGR help me as a graduate applicant?" to="students#faq8" />
					<Listing primary="Does UGR look good on my resume?" to="students#faq2" />
					<Listing primary="What sorts of projects are available?" to="students#faq7" />
					<Listing secondary="Learn more here" to="students#faq" />
				</Section>
				<Section title="Currently Open Positions">
					<Listing
						primary="Physical Lab Sciences - Lab Assistant"
						secondary="Ongoing Application"
						to="board:plab"
					/>
					<Listing
						primary="Video Games Psychology Study"
						secondary="Application available January 14, 2020"
						to="board:vgame"
					/>
					<Listing primary="Japanese Post-War History - Independent Project" to="board:japost" />
					<Listing secondary="See more available applications" to="board" />
				</Section>
			</div>
		</div>
	);
};

export default MainBody;
