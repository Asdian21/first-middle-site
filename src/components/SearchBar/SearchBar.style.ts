import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 54px;
	width: 552px;
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
	height: 54px;
	background: transparent;
	border: none;
	outline: none;
	padding: 0 50px 0 16px;
	color: #fff;
	font: 400 16px "Open Sans";

	&::placeholder {
		color: #888;
	}
`;

export const SearchIcon = styled.img`
	position: absolute;
	right: 16px;
	width: 20px;
	height: 20px;
	pointer-events: none;
	opacity: 0.8;
	cursor: pointer;
`;
