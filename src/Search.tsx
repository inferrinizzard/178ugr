import React, { useState } from "react";
import { Link } from "react-router-dom";

import Popper from "@material-ui/core/Popper";
import TextField from "@material-ui/core/TextField";
import SearchRounded from "@material-ui/icons/SearchRounded";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import questions from "./questions.json";
import tips from "./tips.json";
import positions from "./positions.json";
import events from "./events.json";

export interface SearchProps {}

const Search: React.SFC<SearchProps> = () => {
	let [search, setSearch] = useState("");
	let [target, setTarget] = useState(null as HTMLElement | null);

	return (
		<>
			<TextField
				label="Search UGR"
				variant="outlined"
				style={{ float: "right", backgroundColor: "white" }}
				InputProps={{
					endAdornment: <SearchRounded />,
					style: { paddingRight: "8px" },
				}}
				onChange={e => {
					setSearch(e.target.value.toLowerCase());
					setTarget(e.currentTarget);
				}}
			/>
			<Popper
				open={!!search}
				placement="bottom"
				anchorEl={target}
				style={{ backgroundColor: "white" }}>
				<List>
					{(questions.some(
						({ q, a }) => q.toLowerCase().includes(search) || a.toLowerCase().includes(search)
					) ||
						tips.some(
							({ s, d }) => s.toLowerCase().includes(search) || d.toLowerCase().includes(search)
						)) && (
						<ListItem component={Link} to="students" onClick={() => setSearch("")}>
							<ListItemText primary="Found in: Students Page" />
						</ListItem>
					)}
					{
						<ListItem component={Link} to="mentors" onClick={() => setSearch("")}>
							<ListItemText primary="Found in: Mentor Page" />
						</ListItem>
					}
					{Object.entries(positions).some(([k, { title, desc, req, pref, contact }]) =>
						[
							k,
							title,
							desc,
							contact,
							...(Array.isArray(req) ? req : [req]),
							...(Array.isArray(pref) ? pref : [pref]),
						].some(v => v.toLowerCase().includes(search))
					) && (
						<ListItem component={Link} to="board" onClick={() => setSearch("")}>
							<ListItemText primary="Found in: Open Positions" />
						</ListItem>
					)}
					{events.some(({ p, s }) =>
						[p, ...(Array.isArray(s) ? s : [s])].some(v => v.toLowerCase().includes(search))
					) && (
						<ListItem component={Link} to="archive" onClick={() => setSearch("")}>
							<ListItemText primary="Found in: Archive Page" />
						</ListItem>
					)}
				</List>
			</Popper>
		</>
	);
};

export default Search;
