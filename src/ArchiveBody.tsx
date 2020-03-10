import React, { useState, HTMLAttributes } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/SearchRounded";

import events from "./events.json";

interface EntryProps {
	primary: string;
	secondary?: string | string[];
}

export const Entry: React.SFC<EntryProps & HTMLAttributes<HTMLLIElement>> = ({
	primary,
	secondary,
	...props
}) => {
	let long = Array.isArray(secondary);
	return (
		<>
			<ListItem style={{ paddingBottom: long ? 0 : undefined }} {...props}>
				<ListItemText primary={primary} secondary={long ? secondary![0] : secondary} />
			</ListItem>
			{long &&
				(secondary as string[]).slice(1).map((s, i) => (
					<ListItem
						dense
						key={i}
						style={{
							paddingTop: 0,
							paddingBottom: i !== secondary!.length - 2 ? 0 : undefined,
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
					<Divider />
					<List style={{ clear: "left" }}>
						{(keyword
							? events.filter(
									({ p, s }) =>
										p.toLowerCase().includes(keyword) ||
										(Array.isArray(s)
											? s.some(t => t.toLowerCase().includes(keyword))
											: s.toLowerCase().includes(keyword))
							  )
							: events
						).map(({ p, s }, i) => (
							<Entry key={i} primary={p} secondary={s} />
						))}
					</List>
				</CardContent>
			</Card>
		</div>
	);
};

export default ArchiveBody;
