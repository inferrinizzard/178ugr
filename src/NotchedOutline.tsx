import * as React from "react";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

export interface NotchedOutlineProps {
	inner?: JSX.Element;
	width?: string | number;
	title?: string;
	hover?: boolean;
	weight?: string | number;
	radius?: string | number;
	colour?: string | number;
	hoverColour?: string | number;
	focusColour?: string | number;
}

const Fieldset = styled.fieldset<{
	colour?: number | string;
	radius?: number | string;
	hover?: boolean;
	hoverColour?: number | string;
	focusColour?: number | string;
	weight?: number | string;
}>`
	padding: 0;
	margin: 0;
	transition: border-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
		border-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
	border-style: solid;
	border-width: ${p => (p.weight ? p.weight : "1px")};
	border-radius: ${p => (p.radius ? p.radius : "4px")};
	border-color: ${p => (p.colour ? p.colour : "rgba(0, 0, 0, 0.23)")};

	&:hover {
		border-color: ${p =>
			p.hover ? (p.hoverColour ? p.hoverColour : "black") : undefined};
	}
	&:focus {
		border-color: ${p => (p.focusColour ? p.focusColour : "#3f51b5")};
		border-width: ${p => (p.weight ? p.weight : "2px")};
	}
`;

const Legend = styled.legend`
	padding: 0;
	margin-left: 8px;
	text-align: left;
	transition: width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
	line-height: 11px;
`;

const NotchedOutline: React.SFC<NotchedOutlineProps> = props => {
	return (
		<Fieldset
			colour={props.colour}
			radius={props.radius}
			hover={props.hover}
			hoverColour={props.hoverColour}
			focusColour={props.focusColour}
			weight={props.weight}>
			<Legend style={{ width: props.width ? props.width : 0 }}>
				<Typography style={{ display: "inline" }}>
					{props.title ? props.title : ""}
				</Typography>
			</Legend>
			{props.inner ? props.inner : props.children}
		</Fieldset>
	);
};

export default NotchedOutline;
