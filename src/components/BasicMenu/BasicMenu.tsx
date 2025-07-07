import { useState } from "react";
import { StyleButton, DropdownWrapper, DropdownItem } from "./BasicMenu.style";

export function BasicMenu() {
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen((prev) => !prev);
	};

	const menuItems = [
		"Грили",
		"Коптильни",
		"Печи",
		"Барбекю-зона",
		"Аксессуары",
		"Тандыры",
		"Уличное оборудование",
		"Услуги",
		"Бренды",
		"Акции",
		"Сертификаты",
	];

	const [active, setActive] = useState<string | null>(null);

	return (
		<>
			<StyleButton onClick={handleToggle}>
				<span>Каталог</span>
				<img src="./MainPage/arrow_down.svg" alt="arrow" />
			</StyleButton>
			{open && (
				<DropdownWrapper>
					{menuItems.map((item, index) => (
						<DropdownItem
							key={index}
							onClick={() => setActive(item)}
							active={active === item}
						>
							{item}{" "}
							<button>
								<img src="../../../public/MainPage/arrow_right.svg" alt="" />
							</button>
						</DropdownItem>
					))}
				</DropdownWrapper>
			)}
		</>
	);
}
