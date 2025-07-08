import { useState } from "react";
import {
	IconsWrapper,
	IconButton,
	IconLabel,
	IconImage,
	CartBadge,
} from "./Icons.style";

import accountIcon from "../../assets/icons/account_icon.svg";
import compareIcon from "../../assets/icons/compare_icon.svg";
import favoriteIcon from "../../assets/icons/favourite_icon.png";
import cartIcon from "../../assets/icons/cart_icon.svg";

export const Icons = () => {
	const [active, setActive] = useState<string | null>(null);

	const items = [
		{ id: "account", label: "Аккаунт", icon: accountIcon },
		{ id: "compare", label: "Сравнения", icon: compareIcon },
		{ id: "favorites", label: "Избранное", icon: favoriteIcon },
		{ id: "cart", label: "Корзина", icon: cartIcon, count: 11 },
	];

	return (
		<IconsWrapper>
			{items.map((item) => (
				<IconButton
					key={item.id}
					$active={active === item.id}
					onClick={() => setActive(item.id)}
				>
					<IconImage src={item.icon} alt={item.label} />
					{item.id === "cart" && item.count && (
						<CartBadge>{item.count}</CartBadge>
					)}
					<IconLabel $active={active === item.id}>{item.label}</IconLabel>
				</IconButton>
			))}
		</IconsWrapper>
	);
};
