import React from "react";

import Typography from "@material-ui/core/Typography";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
	return (
		<div
			style={{
				borderTop: "1px gray solid",
			}}>
			<Typography>
				UNIVERSITY OF CALIFORNIA SANTA CRUZ, 1156 HIGH STREET, SANTA CRUZ, CA 95064 © 2020 THE
			</Typography>
			<Typography>REGENTS OF THE UNIVERSITY OF CALIFORNIA. ALL RIGHTS RESERVED.</Typography>
			<Typography>Made for CMPM 178</Typography>
		</div>
	);
};

export default Footer;
