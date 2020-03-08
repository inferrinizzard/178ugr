import React from "react";

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

interface SummaryProps {}

const Summary: React.SFC<SummaryProps> = ({children}) => {
	return (
		<ExpansionPanelSummary expandIcon={<ArrowDown />}>
			<Typography variant="subtitle1">{children}</Typography>
		</ExpansionPanelSummary>
	);
};

interface ItemProps {}

const Item: React.SFC<ItemProps> = ({children}) => {
	return (
		<ExpansionPanelDetails style={{padding: "8px"}}>
			<ListItem button dense style={{borderRadius: ".5em"}}>
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

const questions = [
	{
		q: "What is Undergraduate Research (UGR)?",
		a:
			"Undergraduate research is an inquiry or investigation conducted by an undergraduate student that makes an original intellectual or creative contribution to the discipline (www.cur.org). Undergraduate research is done in each division and department at UCSC and includes a wide range of endeavors, from performance arts to literary criticism to laboratory research on treatments for cancer.",
	},
	{
		q: "Why should I do UGR?",
		a:
			"You will benefit both academically and through career exploration as you engage in the pursuit of knowledge.  In addition, the creativity, curiosity, ability to focus, diligence, verbal and written fluency, and respect for others’ contributions that are necessary to thrive as an undergraduate researcher are critical precursors for understanding and engaging in modern cultural, academic, and professional challenges. Participating in UR can be critically important for being accepted into graduate school.",
	},
	{q: "How does the program prepare students for UGR?", a: "some an"},
	{
		q: "What can I do to get involved as a transfer student?",
		a: `It is critical for you to start the process of finding a program or position as soon as possible since you have limited time at the university. Begin by reading the Preparing for Undergraduate Research page and continue by looking at the resources listed on the page for your division under UCSC Divisions under the For Students menu tab.\nIf you are in a Science, Technology, Engineering, and Math (STEM) field, consider attending WEST, Workshops for Engineering & Science Transfers. WEST gives transferring students a jump-start on entering UCSC science and engineering majors.\nTo find a position, you will need to build personal relationships with faculty. Go to office hours weekly for at least one class. In addition to helping you with the class, the professor can help you find out about possible positions and can write you letters of recommendation. Ask questions about the class and the professor's research and career path.\nBegin to research summer programs as soon as possible.  It may be challenging to get a position on campus if you have just arrived, and a successful summer research experience may give you an advantage.  See STEM Summer Research.\nConsider classes in your department that involve research. You can get credit and also build a relationship with a professor.\nUtilize the support available for transfer students at STARS and other academic support units.`,
	},
	{
		q: "Do I need to have taken specific classes before I can do research?",
		a:
			"The answer depends on what field you are in.  Some professors require that you have taken advanced classes in your major while other investigators are looking for enthusiastic students without a specific background.  Contact the program or professor if you have questions about the necessary prerequisites.",
	},
	{
		q: "When should I begin doing research?",
		a: `You should begin looking into opportunities and talking to professors as soon as possible, ideally during or after your first or second year. If you ask what the professor looks for in an undergraduate research assistant while you are still taking general classes, you can make sure you have the necessary requirements to join the research group.\nIf you are planning to transfer to UCSC, look into what professors are doing for their research before you come.  Email them and ask what they look for in a student researcher.\n\nIf you get involved in research early in your college career, you might be able to work in multiple positions or in one position for several years.  Extensive experience can help you figure out what topics and methods most interest you.`,
	},
	{q: "How can I find a research group or lab to join?", a: "some an"},
	{
		q: "What can I do to gain more experience for graduate school?",
		a:
			"Consider a post baccalaureate program.  These programs provide recent college graduates who are planning to apply to graduate or professional (medical/dental/pharmacy) school an opportunity to spend one or two years performing full-time research.  See What's Next? for more information.",
	},
	{q: "How can I get more help?", a: "some an"},
];

export interface StudentBodyProps {}

const StudentBody: React.SFC<StudentBodyProps> = () => {
	return (
		<div style={{margin: "1em auto"}}>
			<Card
				variant="outlined"
				style={{
					width: "20%",
					display: "inline-block",
					position: "sticky",
					top: "1em",
				}}>
				<ExpansionPanel>
					<Summary>Overview</Summary>
					<Divider />
					<Item>Test</Item>
				</ExpansionPanel>
				<ExpansionPanel>
					<Summary>Frequently Asked Questions</Summary>
					<Divider />
					{questions.map(({q: question}, i) => (
						<Item key={i}>{question}</Item>
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
				<Card variant="outlined">
					<CardHeader
						title="Overview"
						titleTypographyProps={{
							align: "left",
							variant: "h5",
						}}
					/>
				</Card>
				<Card variant="outlined">
					<CardHeader
						title="Frequently Asked Questions"
						titleTypographyProps={{
							align: "left",
							variant: "h5",
						}}
					/>
					<CardContent>
						<List>
							{questions.map(({q: question, a: answer}, i) =>
								answer.includes("\n") ? (
									<>
										<ListItem key={i}>
											<ListItemText primary={question} />
										</ListItem>
										{/* add first secondary to ↑ */}
										{answer.split("\n").map((a, j) => (
											<ListItem dense key={j}>
												<ListItemText secondary={a} />
											</ListItem>
										))}
									</>
								) : (
									<ListItem key={i}>
										<ListItemText primary={question} secondary={answer} />
									</ListItem>
								)
							)}
						</List>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default StudentBody;
