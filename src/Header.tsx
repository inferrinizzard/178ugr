import React from "react";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
					Undergraduate Research
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
					<Button style={{ width: "25%" }}>For Students</Button>
					<Button style={{ width: "25%" }}>For Mentors</Button>
					<Button style={{ width: "25%" }}>Archive</Button>
					<Button style={{ width: "25%" }}>Contact</Button>
				</ButtonGroup>
			</div>
		</header>
	);
};

export default Header;
