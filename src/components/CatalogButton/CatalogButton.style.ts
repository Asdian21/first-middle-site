import styled from "styled-components";

export const StyleCatalogButton = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 48px;
	background-color: var(--catalog-btn-bg);
	justify-content: center;
	align-items: center;

	.innerCatalogButton {
		display: flex;
		gap: 30px;

		span {
			font: 700 16px "Open Sans";
			color: var(--white);
		}
	}
`;
