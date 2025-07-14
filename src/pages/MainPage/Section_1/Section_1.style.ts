import styled from "styled-components";

export const StyleSection_1 = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
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
