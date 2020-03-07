import React from "react";
import { Link, NavLink } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Tooltip from "@material-ui/core/Tooltip";

import Logo from "./Logo";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	return (
		<header>
			<div>
				<div style={{ display: "inline-block", height: "3em", width: "20%" }}>
					<Logo />
				</div>
				<Typography
					variant="h3"
					style={{ display: "inline-block", width: "55%" }}>
					<Link to="home" style={{ textDecoration: "none", color: "black" }}>
						Undergraduate Research
					</Link>
				</Typography>
				<TextField
					// label="Search Undergraduate Research"
					label="Search"
					variant="outlined"
					style={{ display: "inline-block", width: "25%" }}
				/>
			</div>
			<div>
				<ButtonGroup style={{ width: "100%" }}>
					<Button component={NavLink} to="students" style={{ width: "25%" }}>
						For Students
					</Button>
					<Button component={NavLink} to="mentors" style={{ width: "25%" }}>
						For Mentors
					</Button>
					<Button component={NavLink} to="archive" style={{ width: "25%" }}>
						Archive
					</Button>
					<Button component={NavLink} to="contact" style={{ width: "25%" }}>
						Contact
					</Button>
				</ButtonGroup>
			</div>
		</header>
	);
};

export default Header;
