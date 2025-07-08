import styled from "styled-components";

export const StyleSection_1 = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	.first_line {
		display: flex;
		background-color: var(--black-bg);
		align-items: center;
		height: 47px;

		width: 100%;

		.left_info_container {
			display: flex;
			width: 705px;
			margin-right: auto;
			margin-left: 50px;

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
			margin-right: 50px;

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
		display: flex;
		width: 100%;
		height: 93px;
		align-items: center;
		background-color: var(--light-black-bg);

		.logo {
			background-image: url("./MainPage/logo.png");
			background-repeat: no-repeat;
			width: 172px;
			height: 79px;
			margin: 7px 64px 7px 50px;
		}
		.search {
			display: flex;
			width: 684px;
			height: 54px;
			margin-right: 46px;
			.catalog {
				width: 132px;
				height: 100%;
			}
			.searchBar {
				position: relative;
				background-color: var(--input-bg);
				width: 552px;
				height: 54px;
				border-radius: 0px 5px 5px 0px;
				display: flex;
				padding-left: 15px;
				font: 400 16px "Open Sans";
				color: var(--white);
			}
		}
		.free_for_regions {
			width: 391px;
			height: 61px;
			display: flex;
			justify-content: space-between;

			.left_side {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.left_top {
					display: flex;
					gap: 12px;
					button {
						background-color: transparent;
						border: none;
					}
				}
				.left_bottom {
					font: 300 15px "Open Sans";
					color: var(--white);
				}
			}
			.right_side {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}
		.account {
			width: 58px;
			height: 75px;
		}
	}

	.third_line {
		display: flex;
		width: 100%;
		height: 65px;

		.block3 {
			width: 128%;
		}
	}
`;

export const StyleNumber = styled.div`
	display: flex;
	width: 164px;
	height: 27px;
	gap: 10px;
	align-items: center;
	img {
		width: 16px;
		height: 16px;
	}
	span {
		color: var(--white);
		font: 600 16px "Open Sans";
	}
`;

export const Block = styled.div<{ $active?: boolean }>`
	display: flex;
	background-color: ${({ $active }) => ($active ? "#232826" : "#1C1C1C")};
	font: 400 20px "Open Sans";
	height: 100%;
	color: ${({ $active }) => ($active ? "#FFFFFF" : "#4A4A4A")};
	padding: 19px 68px 19px 39px;
	width: 100%;
	justify-content: center;
	cursor: pointer;
`;

export const Slider = styled.div`
	background-color: var(--catalog-bg);
	.container {
		width: 100%;
		height: 750px;
		/* overflow: hidden; */
		position: relative;
		object-fit: cover;
		transition: box-shadow 200ms;
		&:hover {
			box-shadow: 0 10px 50px -10px rgba(0, 0, 0, 0.25);
		}
	}
	.slideshow {
		position: relative;
		width: 100%;
		&:after {
			content: "";
			display: block;
		}
		&:hover a {
			opacity: 1;
		}
		a {
			opacity: 0;
			position: relative;
			text-decoration: none;
			transition: opacity 0.5s;

			&:first-child:after {
				content: "";
				left: 10px;
				transform: rotate(-135deg);
			}
			&:nth-child(2):after {
				content: "";
				right: 10px;
				transform: rotate(45deg);
			}
		}
		.slide {
			background-color: #fff;
			box-sizing: border-box;
			display: none;
			height: 58%;
			position: absolute;
			width: 100%;
			&:first-child,
			&:target {
				display: block;
			}
			a {
				display: block;
				height: 750px;
				position: absolute;
				width: 50%;
				&:nth-child(2) {
					left: 50%;
				}
				&:after {
					border-color: #fff #fff transparent transparent;
					border-style: solid;
					border-width: 2px;
					color: #fff;
					display: block;
					height: 10px;
					position: absolute;
					top: calc(50% - 5px);
					width: 10px;
				}
			}
			img {
				border-radius: 5px;
				width: 100%;
			}
		}
	}
	.pagination {
		display: flex;
		top: 720px;
		justify-content: center;
		position: absolute;
		width: 100%;
		a {
			background: #ccc;
			border-radius: 50%;
			display: block;
			height: 10px;
			width: 10px;
			&:not(:last-child) {
				margin-right: 5px;
			}
			span {
				display: none;
			}
		}
		span {
			display: none;
		}
	}
`;
