import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import MLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Tooltip from "@material-ui/core/Tooltip";

import Logo from "./Logo";
import Search from "./Search";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	let [board, setBoard] = useState(false);
	let location = useLocation();

	useEffect(() => setBoard(location.pathname.includes("board")), [location]);

	return (
		<header>
			<div>
				<MLink
					href="https://ucsc.edu"
					style={{ display: "inline-block", height: "3em", width: "20%" }}>
					<Logo />
				</MLink>
				<Typography variant="h3" style={{ display: "inline-block", width: "55%" }}>
					<Link to="home" style={{ textDecoration: "none", color: "#f5bd00" }}>
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
						style={{ width: "20%", backgroundColor: "white" }}>
						<Typography variant="h6">{"Home"}</Typography>
					</Button>
					<Button
						component={NavLink}
						to="students"
						activeClassName="atHeader"
						style={{ width: "20%", backgroundColor: "white" }}>
						<Typography variant="h6">{"For Students"}</Typography>
					</Button>
					<Button
						component={NavLink}
						to="board"
						className={board ? "atHeader" : undefined}
						activeClassName="atHeader"
						style={{ width: "20%", backgroundColor: "white" }}>
						<Typography variant="h6">{"Positions"}</Typography>
					</Button>
					<Button
						component={NavLink}
						to="mentors"
						activeClassName="atHeader"
						style={{ width: "20%", backgroundColor: "white" }}>
						<Typography variant="h6">{"For Mentors"}</Typography>
					</Button>
					<Button
						component={NavLink}
						to="archive"
						activeClassName="atHeader"
						style={{ width: "20%", backgroundColor: "white" }}>
						<Typography variant="h6">{"Archive"}</Typography>
					</Button>
				</ButtonGroup>
			</div>
		</header>
	);
};

export default Header;
