import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Search from "@material-ui/icons/SearchRounded";

interface EntryProps {
	primary: string;
	secondary: string | string[];
}

export const Entry: React.SFC<EntryProps> = ({ primary, secondary }) => {
	let long = Array.isArray(secondary);
	return (
		<>
			<ListItem style={{ paddingBottom: long ? 0 : undefined }}>
				<ListItemText primary={primary} secondary={long ? secondary[0] : secondary} />
			</ListItem>
			{long &&
				(secondary as string[]).slice(1).map((s, i) => (
					<ListItem
						dense
						key={i}
						style={{
							paddingTop: 0,
							paddingBottom: i !== secondary.length - 2 ? 0 : undefined,
						}}>
						<ListItemText secondary={s} />
					</ListItem>
				))}
		</>
	);
};

const events = [
	{ p: "Old Event", s: "Lab 1" },
	{ p: "Old Event 2", s: ["Lab 1", "Role B"] },
	{ p: "Old Event", s: "Lab 1" },
	{ p: "Old Event", s: "Lab 1" },
];

export interface ArchiveBodyProps {}

const ArchiveBody: React.SFC<ArchiveBodyProps> = () => {
	let [keyword, setKeyword] = useState("");
	return (
		<div style={{ margin: "1em auto" }}>
			<Card variant="outlined">
				<CardContent>
					<TextField
						label="Search by keyword"
						variant="outlined"
						InputProps={{
							endAdornment: <Search />,
							style: { paddingRight: "8px" },
						}}
						onChange={e => setKeyword(e.target.value.toLowerCase())}
						style={{ float: "left", paddingBottom: "1em" }}
					/>
					<List style={{ clear: "left" }}>
						{(keyword
							? events.filter(
									({ p: k, s: v }) =>
										k.toLowerCase().includes(keyword) ||
										(Array.isArray(v)
											? v.some(t => t.toLowerCase().includes(keyword))
											: v.toLowerCase().includes(keyword))
							  )
							: events
						).map(({ p: primary, s: secondary }, i) => (
							<Entry key={i} primary={primary} secondary={secondary} />
						))}
					</List>
				</CardContent>
			</Card>
		</div>
	);
};

export default ArchiveBody;
