import React from "react";
import { Link, NavLink } from "react-router-dom";

import MLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Tooltip from "@material-ui/core/Tooltip";

import Logo from "./Logo";
import Search from "./Search";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	return (
		<header>
			<div>
				<MLink
					href="https://ucsc.edu"
					style={{ display: "inline-block", height: "3em", width: "20%" }}>
					<Logo />
				</MLink>
				<Typography
					variant="h3"
					style={{ display: "inline-block", width: "55%" }}>
					<Link to="home" style={{ textDecoration: "none", color: "black" }}>
						Undergraduate Research
					</Link>
				</Typography>
				<div
					style={{
						display: "inline-block",
						width: "25%",
						verticalAlign: "top",
					}}>
					<Search />
				</div>
			</div>
			<div style={{ marginTop: ".25em" }}>
				<ButtonGroup style={{ width: "100%" }}>
					<Button
						component={NavLink}
						to="home"
						activeClassName="atHeader"
						style={{ width: "25%" }}>
						Home
					</Button>
					<Button
						component={NavLink}
						to="students"
						activeClassName="atHeader"
						style={{ width: "25%" }}>
						For Students
					</Button>
					<Button
						component={NavLink}
						to="mentors"
						activeClassName="atHeader"
						style={{ width: "25%" }}>
						For Mentors
					</Button>
					<Button
						component={NavLink}
						to="archive"
						activeClassName="atHeader"
						style={{ width: "25%" }}>
						Archive
					</Button>
				</ButtonGroup>
			</div>
		</header>
	);
};

export default Header;
