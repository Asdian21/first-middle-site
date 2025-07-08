import styled from "styled-components";

export const IconsWrapper = styled.div`
	display: flex;
	gap: 43px;
	background-color: #1a1a1a;
	padding: 16px 0;
	margin-left: 51px;
`;

export const IconButton = styled.button<{ $active?: boolean }>`
	position: relative;
	background: none;
	border: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	svg,
	img {
		filter: ${({ $active }) =>
			$active ? "brightness(400%)" : "brightness(100%)"};
		transition: filter 0.2s ease;
		width: 28px;
		height: 28px;
	}
`;

export const IconLabel = styled.span<{ $active?: boolean }>`
	margin-top: 8px;
	font: 400 14px "Open Sans", sans-serif;
	color: ${({ $active }) => ($active ? "#FFFFFF" : "#4A4A4A")};
`;

export const IconImage = styled.img`
	width: 32px;
	height: 32px;
`;

export const CartBadge = styled.div`
	position: absolute;
	top: -4px;
	right: -8px;
	background-color: #d32f2f;
	color: white;
	font-size: 12px;
	font-weight: 600;
	border-radius: 12px;
	padding: 2px 6px;
	line-height: 1;
`;
