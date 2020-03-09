import React, { useState, useRef } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export interface MentorBodyProps {}

const MentorBody: React.SFC<MentorBodyProps> = () => {
	let [pressed, setPressed] = useState(false);
	let subjRef = useRef(null),
		descRef = useRef(null);
	return (
		<div style={{ margin: "1em auto" }}>
			<Typography variant="h4" align="left">
				For Mentors
			</Typography>
			<Card variant="outlined">
				<CardContent style={{ padding: "2em" }}>
					<Typography variant="h5" gutterBottom align="left">
						Submit a New Position
					</Typography>
					<div style={{ display: "block", alignItems: "left" }}>
						<TextField
							variant="outlined"
							label="Subject"
							inputRef={ref => (subjRef = ref)}
							InputProps={{
								style: { width: "100%" },
							}}
							style={{
								display: "block",
								width: "70%",
								float: "left",
								paddingBottom: "1em",
							}}
						/>
						<TextField
							variant="outlined"
							label="Description"
							placeholder="Whom are you looking for?"
							multiline
							rows={8}
							inputRef={ref => (descRef = ref)}
							InputProps={{
								style: { width: "100%" },
							}}
							style={{
								display: "block",
								width: "70%",
								float: "left",
								paddingBottom: "1em",
							}}
						/>
						<div style={{ clear: "left", float: "left", marginBottom: "1em" }}>
							<Button
								variant="outlined"
								onClick={e => {
									setPressed(true);
									console.log(subjRef, descRef);
									((subjRef as unknown) as HTMLInputElement).value = "";
									((descRef as unknown) as HTMLTextAreaElement).value = "";
								}}
								style={{ display: "inline" }}>
								Submit
							</Button>
							{pressed && (
								<Typography variant="subtitle1" style={{ marginLeft: "1em", display: "inline" }}>
									Your response has been submitted.
								</Typography>
							)}
						</div>
					</div>
					<div style={{ clear: "both" }}>
						<Typography variant="h5" gutterBottom align="left">
							Additional Resources
						</Typography>
						<Typography gutterBottom align="left">
							Professional researchers can substantially gain from undergraduate students' hard
							work, energy, curiosity, and fresh perspectives. Yet, being an effective mentor is
							challenging as well as rewarding. The resources below can be of assistance:
						</Typography>
						<Typography gutterBottom align="left">
							<Link>{"Same-ethnicity mentors boost students' commitment to STEM careers. "}</Link>
							Syed, Moin, Goza, Barbara K., Chemers, Martin M., Zurbriggen, Eileen L. Child
							Development. May/Jun 2012, Vol. 83 Issue 3, p 896-910.
						</Typography>
						<Typography gutterBottom align="left">
							Adviser, Teacher, Role Model, Friend: On Being a Mentor to Students in the Sciences
							and Engineering.
						</Typography>
						<Typography gutterBottom align="left">
							<Link>{"Entering Mentoring "}</Link>- a curriculum designed for mentor training across
							the STEM disciplines
						</Typography>
						<Typography gutterBottom align="left">
							<Link>{"Nature's Guide for Mentors "}</Link>- "Having a good mentor early in your
							career can mean the difference between success and failure in any field." Adrian Lee,
							Carina Dennis & Philip Campbell, volume 447, 791-797, 14 June 2007.
						</Typography>
						<Typography gutterBottom align="left">
							<Link>{"Mentoring as a Socializing Activity "}</Link>
							from the
							<Link>{" Council on Undergraduate Research"}</Link>
						</Typography>
						<Typography gutterBottom align="left">
							<Link>{"Mentoring Undergraduates in Summer Research Programs "}</Link>
							from the
							<Link>{" Leadership Alliance"}</Link>
						</Typography>
						<Typography gutterBottom align="left">
							<Link>{"Mentoring Manual "}</Link>
							from
							<Link>{" Pathways to Science"}</Link>
						</Typography>
						<Typography gutterBottom align="left">
							<Link>{"Key Diversity References "}</Link>
							from Pathways to Science
						</Typography>
						<Typography gutterBottom align="left">
							<Link>{"Study Examines Qualities of Good and Bad Mentoring Relationships "}</Link>
							from UCSF News
						</Typography>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default MentorBody;
