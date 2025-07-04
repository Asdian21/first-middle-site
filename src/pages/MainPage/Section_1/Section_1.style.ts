import styled from "styled-components";

export const StyleSection_1 = styled.div`
	display: flex;
	width: 100%;
	height: 47px;
	background-color: var(--black-bg);
	align-items: center;
	.first_line {
		display: flex;
		margin: auto 50px;
		width: 100%;

		.left_info_container {
			display: flex;
			width: 700px;
			margin-right: auto;

			.location {
				.locationImg {
					margin-right: 15px;
				}
				.location_text {
					font: 400 16px "Open Sans";
					color: var(--white);
					margin-right: 36px;
				}
			}
			.work_time {
				display: flex;
				align-items: center;
				.clockImg {
					width: 19px;
					height: 19px;
					margin-right: 15px;
				}
				.work_time_text {
					font: 400 16px "Open Sans";
					color: var(--white);
					margin-right: 6px;
				}
			}
			.vertical_line {
				height: 21px;
				border: 1px solid var(--white);
				margin: auto 0;
			}
			.orders {
				font: 400 16px "Open Sans";
				color: var(--white);
				margin-left: 12px;
			}
		}

		.right_info_container {
			width: 576px;
			height: 27px;
			display: flex;
			gap: 40px;
			justify-content: center;
			align-items: center;

			.active {
				color: var(--active);
			}

			.disabled {
				color: var(--disabled);
			}

			a {
				text-decoration: none;
			}
		}
	}

	.second_line {
	}
`;
