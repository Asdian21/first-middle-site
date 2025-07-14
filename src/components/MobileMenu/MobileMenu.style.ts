import styled from "styled-components";

export const StyleMobileMenu = styled.div`
	width: 100%;
	display: flex;
	height: 70px;
	background-color: var(--menu-item-bg);

	.innerMobileMenu {
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;

		.MenuItem {
			display: flex;
			flex-direction: column;
			padding: 8px;
			width: 74px;
			height: 70px;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;

			.text {
				font: 400 14px "Open Sans";
				color: gray;
			}

			img {
				filter: grayscale(1) brightness(0.6);
				transition: filter 0.3s;
			}

			&.active {
				.text {
					color: white;
				}

				img {
					filter: none;
				}
			}
		}
	}
`;
