import styled from "styled-components";

export const StyleMobileHeader = styled.div<{ menuOpen?: boolean }>`
	display: flex;
	flex-direction: column;
	width: 375px;
	.first_line {
		background-color: var(--black-bg);

		.first_line_inner {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: auto 10px;
			height: 86px;

			.menu {
				border: 1px solid var(--white);
				color: var(--white);
				background-color: transparent;
				padding: 9px 12px;
			}

			.logo {
				width: 98px;
			}

			.contacts {
				border: 1px solid var(--white);
				color: var(--white);
				background-color: transparent;
				padding: ${({ menuOpen }) => (menuOpen ? "11px 7px" : "5px 27px")};
			}
		}
	}
`;
