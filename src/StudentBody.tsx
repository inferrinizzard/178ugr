import React, { useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from "@material-ui/core/Typography";

import ArrowDown from "@material-ui/icons/ExpandMoreRounded";

import { Entry } from "./ArchiveBody";
import questions from "./questions.json";
import tips from "./tips.json";

interface SummaryProps {}

const Summary: React.SFC<SummaryProps> = ({ children }) => {
	return (
		<ExpansionPanelSummary expandIcon={<ArrowDown />}>
			<Typography variant="subtitle1">{children}</Typography>
		</ExpansionPanelSummary>
	);
};

interface ItemProps {
	link: string;
}

const Item: React.SFC<ItemProps> = ({ children, link }) => {
	return (
		<ExpansionPanelDetails style={{ padding: "8px" }}>
			<ListItem
				button
				dense
				onClick={() => scroll(link)}
				style={{ borderRadius: ".5em" }}>
				<ListItemText primary={children} />
			</ListItem>
			{/* <Typography
				variant="subtitle2"
				style={{marginLeft: "1em", textAlign: "left"}}>
				{children}
			</Typography> */}
		</ExpansionPanelDetails>
	);
};

export interface StudentBodyProps {}

const scroll = (id: string) =>
	document?.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const StudentBody: React.SFC<StudentBodyProps> = () => {
	useEffect(() => {
		if (window.location.href.includes("#"))
			scroll(window.location.href.split("#")[1]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div style={{ margin: "1em auto" }}>
			<Card
				variant="outlined"
				style={{
					width: "20%",
					display: "inline-block",
					position: "sticky",
					top: "1em",
				}}>
				<ExpansionPanel>
					<Summary>Application Tips</Summary>
					<Divider />
					{tips.map(({ s: t }, i) => (
						<Item key={i} link={"tips" + (i + 1)}>
							{t}
						</Item>
					))}
				</ExpansionPanel>
				<ExpansionPanel>
					<Summary>Frequently Asked Questions</Summary>
					<Divider />
					{questions.map(({ q: question }, i) => (
						<Item key={i} link={"faq" + (i + 1)}>
							{question}
						</Item>
					))}
				</ExpansionPanel>
			</Card>
			<div
				style={{
					width: "calc(79% - 1em)",
					display: "inline-block",
					verticalAlign: "top",
					marginLeft: "1em",
				}}>
				<Card variant="outlined" id="tips" style={{ marginBottom: "1em" }}>
					<CardHeader
						title="Application Tips"
						titleTypographyProps={{
							align: "left",
							variant: "h5",
						}}
					/>
					<CardContent>
						<List>
							{tips.map(({ d: t }, i) => (
								<Entry key={i} id={"tips" + (i + 1)} primary={t} />
							))}
						</List>
					</CardContent>
				</Card>
				<Card variant="outlined" id="faq" style={{ marginBottom: "1em" }}>
					<CardHeader
						title="Frequently Asked Questions"
						titleTypographyProps={{
							align: "left",
							variant: "h5",
						}}
					/>
					<CardContent>
						<List>
							{questions.map(({ q: question, a: answer }, i) => (
								<Entry
									key={i}
									id={"faq" + (i + 1)}
									primary={question}
									secondary={answer.split("\n")}
								/>
							))}
						</List>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default StudentBody;
