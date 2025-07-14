import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: calc(37.5vw - 168px);
`;

export const InputWrapper = styled.div`
	position: relative;
	flex-grow: 1;
	height: 100%;
	border-left: none;
	background-color: var(--input-bg);
	border-radius: 0 5px 5px 0;
	display: flex;
	align-items: center;
`;

export const SearchInput = styled.input`
	width: 100%;
	background: transparent;
	border: none;
	outline: none;
	padding: 0 calc(2.4vw + 3.333px) 0 calc(0.9vw - 0.667px);
	color: #fff;
	font: 400 calc(0.5vw + 6px) "Open Sans";

	&::placeholder {
		color: #888;
	}
`;

export const SearchIcon = styled.img`
	position: absolute;
	right: calc(1vw - 2.333px);
	width: calc(0.5vw + 10px);
	height: calc(0.5vw + 10px);
	pointer-events: none;
	opacity: 0.8;
	cursor: pointer;
`;
