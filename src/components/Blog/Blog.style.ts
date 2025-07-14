import styled from "styled-components";

export const StyleBlog = styled.div<{ active?: boolean }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: rgba(14, 14, 14, 0.83);
	position: absolute;
	height: 86vh;
	z-index: 10;
	top: 100%;

	button {
		width: 100%;
		display: flex;
		height: 50px;
		justify-content: space-between;
		align-items: center;
		background-color: ${({ active }) =>
			active ? "var(--red)" : "rgba(14, 14, 14, 0.83)"};
		border: none;

		.text {
			margin-left: 10px;
			color: var(--white);
			font: 700 18px "Open Sans";
		}

		img {
			width: 12px;
			height: 12px;
			margin-right: 10px;
			transition: transform 0.3s ease;
		}

		.rotated {
			transform: rotate(180deg);
		}
	}
`;

export const SubCategory = styled.div`
	background-color: var(--menu-subitem-bg);
	backdrop-filter: blur(7px);

	.subitem {
		color: #ccc;
		font: 400 16px "Open Sans";
		padding: 8px 0;
		cursor: pointer;
		transition: 0.2s;
		border: none;
	}
`;
