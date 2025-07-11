import styled from "styled-components";

export const StyleButton = styled.div`
	color: var(--white);
	font: 700 calc(0.3vw + 9.333px) "Open Sans";
	background-color: var(--red);
	height: calc(1.6vw + 24px);
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
		width: calc(0.3vw + 7px);
		height: calc(0.3vw + 7px);
	}
`;

export const DropdownWrapper = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	height: 682px;
	background-color: var(--catalog-bg);
	margin-top: 85px;
	margin-left: -286px;
	padding-top: 15px;
	padding-left: 50px;
	z-index: 10;

	.rightSideWrapper {
		display: flex;
		overflow-y: scroll;
		/* Стилизация скроллбара для правой части */
		&::-webkit-scrollbar {
			width: 8px;
		}

		&::-webkit-scrollbar-track {
			background: var(--white);
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--red);
			width: 10px;
			height: 117px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background-color: #ff3b3b;
		}

		scrollbar-width: 6px;
		scrollbar-color: var(--white);
	}

	.subMenu {
		display: flex;
		margin: 37px 311px 100px 40px;
	}

	.brends {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 139px;
		overflow: hidden;
		margin: 38px 70px 39px auto;
	}
`;

export const DropdownItem = styled.div<{ active?: boolean }>`
	display: flex;
	justify-content: space-between;
	width: 406px;
	height: 60px;
	padding: 10px;
	color: ${({ active }) => (active ? "#C62220" : "#FFFFFF")};
	background-color: ${({ active }) => (active ? "#222222" : "#191919")};
	font: 700 24px "Open Sans";
	cursor: pointer;
	transition: background 0.2s;

	button {
		background-color: transparent;
		border: none;
		margin-right: 20px;
	}
`;

export const SubMenuWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 105px;
	row-gap: 25px;
`;

export const SubMenuTitle = styled.div`
	color: #ffffff;
	font: 700 22px "Open Sans";
	margin-bottom: 10px;
`;

export const SubMenuItem = styled.div`
	color: #b3b3b3;
	font: 400 20px "Open Sans";
	margin-bottom: 6px;
	cursor: pointer;

	&:hover {
		color: var(--red);
	}
`;
