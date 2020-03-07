import React from "react";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
	return (
		<div
			style={{
				borderTop: "1px gray solid",
			}}>
			{"Footer goes here"}
		</div>
	);
};

export default Footer;
