import React, {useState} from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";

import Search from "@material-ui/icons/SearchRounded";

import positions from "./positions.json";

interface SkillsListProps {
	title: string;
	list: string[];
}

const SkillsList: React.SFC<SkillsListProps> = ({title, list}) => {
	return (
		(!!list.length && (
			<>
				<Typography variant="body1" align="left">
					{title}
				</Typography>
				<List>
					{list.map((l, i) => (
						<ListItem key={i} style={{paddingTop: 0, paddingBottom: 0}}>
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

	return (
		<div style={{margin: "1em auto"}}>
			<Typography variant="h4" align="left">
				Search for Positions
			</Typography>
			<Card variant="outlined">
				<CardContent>
					<TextField
						label="Search by keyword"
						variant="outlined"
						InputProps={{
							endAdornment: <Search />,
							style: {paddingRight: "8px"},
						}}
						onChange={e => setKeyword(e.target.value.toLowerCase())}
					/>
					{(keyword
						? Object.entries(positions).filter(([k, p]) =>
								Object.values(p).some(tag =>
									Array.isArray(tag)
										? tag.some(t => t.toLowerCase().includes(keyword))
										: tag.toLowerCase().includes(keyword)
								)
						  )
						: Object.entries(positions)
					).map(([key, {title: t, desc: d, req: r, pref: p, contact: c}]) => (
						<React.Fragment key={key}>
							<Divider />
							<Box marginLeft="2em" id={key}>
								<Typography variant="h5" align="left">
									{t}
								</Typography>
								<Typography variant="body1" align="left">
									{d}
								</Typography>
								<SkillsList title="Requirements:" list={r} />
								<SkillsList title="Preferred Skills:" list={p} />
								<Typography variant="body2" align="left">
									{c}
								</Typography>
								<Tooltip title="Dead Link" dir="right">
									<Typography variant="body1" align="left">
										{"Apply Here!"}
									</Typography>
								</Tooltip>
							</Box>
						</React.Fragment>
					))}
				</CardContent>
			</Card>
		</div>
	);
};

export default SearchBody;
