import styled from "styled-components";

export const StyleInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: rgba(14, 14, 14, 0.83);
	position: absolute;
	height: 86vh;
	z-index: 10;
	top: 100%;

	.info {
		width: 100%;
		display: flex;
		height: 50px;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(14, 14, 14, 0.83);
		border: none;
		color: var(--white);
		font: 700 18px "Open Sans";

		.innerInfo {
			margin-left: 10px;
		}
	}
`;
