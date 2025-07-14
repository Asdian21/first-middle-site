import { useState } from "react";
import { StyleCatalogButton } from "./CatalogButton.style";
import { Catalog } from "../Catalog/Catalog";

export const CatalogButton = () => {
	const [active, setActive] = useState(false);

	const handleActive = () => {
		setActive((prev) => !prev);
	};

	return (
		<StyleCatalogButton>
			<div className="innerCatalogButton" onClick={handleActive}>
				<span>Каталог товаров</span>
				<img src="src/assets/icons/arrow_down.svg" />
			</div>
			{active && <Catalog />}
		</StyleCatalogButton>
	);
};
