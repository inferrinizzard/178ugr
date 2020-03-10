import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Search from "@material-ui/icons/SearchRounded";

import positions from "./positions.json";

interface SkillsListProps {
	title: string;
	list: string[];
}

const SkillsList: React.SFC<SkillsListProps> = ({ title, list }) => {
	return (
		(!!list.length && (
			<>
				<Typography variant="body1" align="left">
					{title}
				</Typography>
				<List>
					{list.map((l, i) => (
						<ListItem key={i} style={{ paddingTop: 0, paddingBottom: 0 }}>
							<ListItemText primary={"- " + l} />
						</ListItem>
					))}
				</List>
			</>
		)) ||
		null
	);
};

export interface SearchBodyProps {}

const SearchBody: React.SFC<SearchBodyProps> = () => {
	let [keyword, setKeyword] = useState("");
	let location = useLocation();

	let searchRef = useRef();

	useEffect(() => {
		if (!keyword && location.pathname.includes(":")) {
			setKeyword("#" + location.pathname.split(":")[1]);
			((searchRef as unknown) as HTMLInputElement).value = "#" + location.pathname.split(":")[1];
		} else if (keyword && !location.pathname.includes(":")) {
			setKeyword("#" + location.pathname.split(":")[1]);
			((searchRef as unknown) as HTMLInputElement).value = "";
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div style={{ margin: "1em auto" }}>
			<Typography variant="h4" align="left">
				Search for Positions
			</Typography>
			<Card variant="outlined">
				<CardContent>
					<TextField
						label="Search by keyword"
						variant="outlined"
						inputRef={ref => (searchRef = ref)}
						InputProps={{
							endAdornment: <Search />,
							style: { paddingRight: "8px" },
						}}
						onChange={e => setKeyword(e.target.value.toLowerCase())}
						style={{ float: "left", paddingBottom: "1em" }}
					/>
					<div style={{ clear: "left" }}>
						{(keyword
							? keyword.startsWith("#")
								? Object.entries(positions).filter(([k]) => k === keyword.slice(1))
								: Object.entries(positions).filter(([, p]) =>
										Object.values(p).some(tag =>
											Array.isArray(tag)
												? tag.some(t => t.toLowerCase().includes(keyword))
												: tag.toLowerCase().includes(keyword)
										)
								  )
							: Object.entries(positions)
						).map(([key, { title, desc, req, pref, contact }]) => (
							<React.Fragment key={key}>
								<Divider />
								<Box margin="1em" marginLeft="2em" id={key}>
									<Typography variant="h5" align="left">
										{title}
									</Typography>
									<Typography variant="body1" align="left">
										{desc}
									</Typography>
									<SkillsList title="Requirements:" list={req} />
									<SkillsList title="Preferred Skills:" list={pref} />
									<Typography variant="body2" align="left">
										{contact}
									</Typography>
									<Typography variant="body1" align="left">
										{"Apply Here!"}
									</Typography>
								</Box>
							</React.Fragment>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default SearchBody;
