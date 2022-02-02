import {css} from "styled-components";
import {baseTheme} from "./theme";

export const absolute = css`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`

export const transition = css`
	transition: 0.2s all;
`

export const frame = css`
	background-color: ${baseTheme.colors.dark_green};
	border: 1px solid ${baseTheme.colors.dark_green};
	border-radius: 5px;
	padding: 0.5rem 1rem;
	color: ${baseTheme.colors.white};
	${transition};
	font-size: 1.2rem;
	
	&:hover {
	  background-color: ${baseTheme.colors.white};
	  color: ${baseTheme.colors.dark_green};
	  ${transition}
	}
`