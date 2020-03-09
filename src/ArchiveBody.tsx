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

const Entry: React.SFC<EntryProps> = ({ primary, secondary }) => {
	let long = Array.isArray(secondary);
	return (
		<>
			<ListItem style={{ paddingBottom: long ? 0 : undefined }}>
				<ListItemText
					primary={primary}
					secondary={long ? secondary[0] : secondary}
				/>
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
						<Entry primary="Old Event" secondary="Lab 1" />
						<Entry primary="Old Event 2" secondary={["Lab 1", "Role B"]} />
						<Entry primary="Old Event" secondary="Lab 1" />
					</List>
				</CardContent>
			</Card>
		</div>
	);
};

export default ArchiveBody;
