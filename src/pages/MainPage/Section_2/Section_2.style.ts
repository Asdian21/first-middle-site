import styled from "styled-components";

export const StyleSection_2 = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: calc(0.6vw + 28.148px) calc(0.6vw + 8.148px);
	box-sizing: border-box;
	background: linear-gradient(90deg, #620e0e, #490808, #1d0202);

	.h2 {
		text-align: center;
		color: white;
		font: 700 calc(1.7vw + 14.815px) "Open Sans";
		margin-bottom: calc(1.2vw + 16.296px);
	}

	.grills {
		display: grid;
		grid-template-columns: auto auto auto;
		grid-auto-rows: repeat(2, 1fr);
		grid-template-areas: "gasKeramic coal electricPelet",
			"woodCopt coal electricPelet";
		gap: 20px;
		min-height: 770px;
		background: linear-gradient(90deg, #620e0e, #490808, #1d0202);

		.gasKeramic {
			display: flex;
			max-width: 963px;
			width: 100%;
			gap: 20px;
			grid-area: "gasKeramic";
		}

		.electricPelet {
			display: flex;
			flex-direction: column;
			grid-row: span 2;
			gap: 20px;
			height: 100%;
			grid-area: "electricPelet";
		}

		.woodCopt {
			display: flex;
			max-width: 963px;
			width: 100%;
			gap: 20px;
			grid-area: "woodCopt";
		}

		.item {
			position: relative;
			background-size: cover;
			background-position: center;
			border-radius: 10px;
			overflow: hidden;
			display: flex;
			align-items: flex-end;
			padding: 16px;
			color: white;
			font: 600 20px "Open Sans";
			text-decoration: none; /* убрать подчеркивание */

			&::after {
				content: "›";
				position: absolute;
				right: 16px;
				bottom: 16px;
				font-size: 24px;
				color: white;
			}
		}

		/* Layout based on image */
		.item.gas {
			width: 57%;
			background-image: url("src/assets/images/Gazoviy_grill.png");
			background-repeat: no-repeat;
		}
		.item.keramic {
			width: 43%;
			background-image: url("src/assets/images/Keramicheskiy_grill.png");
			background-repeat: no-repeat;
		}
		.item.wood {
			width: 46%;
			background-image: url("src/assets/images/Drovyanoy_grill.png");
			background-repeat: no-repeat;
		}
		.item.copt {
			width: 54%;
			background-image: url("src/assets/images/Koptilni.png");
			background-repeat: no-repeat;
		}
		.item.coal {
			grid-row: span 2;
			grid-area: "coal";
			background-image: url("src/assets/images/Ugolniy_grill.jpg");
			background-repeat: no-repeat;
		}
		.item.electric {
			width: 100%;
			height: 50%;
			background-image: url("src/assets/images/Electricheskiy_grill.png");
			background-repeat: no-repeat;
		}
		.item.pelet {
			width: 100%;
			height: 50%;
			background-image: url("src/assets/images/Peletniy_grill.png");
			background-repeat: no-repeat;
		}

		@media (700px < width <= 1024px) {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(4, 1fr);
			grid-template-areas:
				"gasKeramic gasKeramic" "coal electricPelet"
				"coal electricPelet" "woodCopt woodCopt";
		}

		@media (max-width: 700px) {
			grid-template-columns: 1fr;

			.item {
				grid-column: span 1 !important;
			}
			.gasKeramic {
				display: flex;
				flex-wrap: wrap;
			}
			.woodCopt {
				display: flex;
				flex-wrap: wrap;
			}

			.item.gas {
				width: 100%;
				min-height: 180px;
			}
			.item.keramic {
				width: 100%;
				min-height: 180px;
			}
			.item.wood {
				width: 100%;
				min-height: 180px;
				background-position: 0 -30px;
			}
			.item.copt {
				width: 100%;
				min-height: 180px;
			}
			.item.coal {
				width: 100%;
				min-height: 180px;
			}
			.item.electric {
				width: 100%;
				min-height: 180px;
			}
			.item.pelet {
				width: 100%;
				min-height: 180px;
			}
		}
	}
`;
