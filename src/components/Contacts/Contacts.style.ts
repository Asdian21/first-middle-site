import styled from "styled-components";

export const StyleContacts = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 10;
	top: 86px;
	width: 100%;
	height: 100%;
	background-color: #000;

	.innerContacts {
		display: flex;
		flex-direction: column;
		margin: 10px 10px auto 10px;

		span {
			font: 700 18px "Open Sans";
			color: var(--white);
			display: flex;
			margin-bottom: 23px;
		}

		.phoneNumber {
			width: 172px;
			height: 27px;
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;

			img {
				width: 16px;
				height: 16px;
			}

			.number {
				font: 600 17px "Open Sans";
				color: var(--white);
			}
		}
		.free {
			font: 300 15px "Open Sans";
			display: flex;
			margin-top: -8px;
			margin-bottom: 15px;
		}
		.address {
			width: 100%;
			max-width: 349px;
			display: flex;
			justify-content: space-between;
			img {
				width: 16px;
				height: 21px;
			}
			span {
				font: 400 16px "Open Sans";
				color: var(--white);
			}
		}
		.delivery {
			font: 300 15px "Open Sans";
			display: flex;
			margin-top: -15px;
			margin-bottom: 15px;
			color: var(--white);
		}
		.workTime {
			max-width: 122px;
			display: flex;
			justify-content: space-between;
			img {
				width: 17px;
				height: 17px;
			}

			.time {
				font: 400 16px "Open Sans";
				color: var(--white);
			}
		}
		.online {
			font: 400 14px "Open Sans";
			color: #4f4f4f;
			display: flex;
			margin-bottom: 15px;
		}
		.socials {
			width: 100%;
			display: flex;
			height: 42px;

			.WhatsApp .Telegram {
				width: 42px;
				height: 42px;
			}

			.Telegram {
				display: flex;
				margin-left: 15px;
				margin-right: 30px;
			}

			.videoConsult {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: var(--red);
				border: none;
				border-radius: 5px;
				width: 100%;
				max-width: 226px;
				height: 42px;

				p {
					color: var(--white);
					font: 600 12px "Monserrat";
				}
			}
		}
	}
`;
