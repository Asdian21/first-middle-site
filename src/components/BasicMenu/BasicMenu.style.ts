import styled from "styled-components";

export const StyleButton = styled.div`
	color: var(--white);
	font: 700 16px "Open Sans";
	background-color: var(--red);

	height: 54px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px 0px 0px 5px;
	cursor: pointer;
	user-select: none;
	position: relative;

	span {
		text-transform: none;
		margin-right: 7px;
	}

	img {
		width: 12px;
		height: 12px;
	}
`;

export const DropdownWrapper = styled.div`
	width: 100vw;
	height: 682px;
	background-color: var(--catalog-bg);
	margin-top: 85px;
	margin-left: -286px;
	padding-top: 15px;
	padding-left: 50px;
	z-index: 10;
`;

export const DropdownItem = styled.div<{ active?: boolean }>`
	display: flex;
	justify-content: space-between;
	width: 406px;
	height: 60px;
	padding: 10px;
	color: ${({ active }) => (active ? "#C62220" : "#FFFFFF")};
	font: 700 24px "Open Sans";
	cursor: pointer;
	transition: background 0.2s;

	button {
		background-color: transparent;
		border: none;
		margin-right: 20px;
	}
`;
