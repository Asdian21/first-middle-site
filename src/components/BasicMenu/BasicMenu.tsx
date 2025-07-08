import { useState } from "react";
import {
	StyleButton,
	DropdownWrapper,
	DropdownItem,
	SubMenuWrapper,
	SubMenuTitle,
	SubMenuItem,
} from "./BasicMenu.style";

export function BasicMenu() {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState<string | null>(null);

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

	const subMenuData: Record<string, { title: string; items: string[] }[]> = {
		Коптильни: [
			{
				title: "Газовые грили",
				items: [
					"Газовые грили Weber",
					"Газовые грили Napoleon",
					"Газовые грили Primo",
					"Газовые грили Oklahoma Joe's",
					"Газовые грили Char-Broil",
					"Газовые грили Big Green Egg",
					"Газовые грили Start Grill",
				],
			},
			{
				title: "Угольные грили",
				items: [
					"Угольные грили Weber",
					"Угольные грили Napoleon",
					"Угольные грили Primo",
					"Угольные грили Oklahoma Joe's",
					"Угольные грили Char-Broil",
					"Угольные грили Big Green Egg",
					"Угольные грили Start Grill",
				],
			},
			{
				title: "Керамические грили",
				items: [
					"Керамические грили Weber",
					"Керамические грили Napoleon",
					"Керамические грили Primo",
					"Керамические грили Oklahoma Joe's",
					"Керамические грили Char-Broil",
					"Керамические грили Big Green Egg",
					"Керамические грили Start Grill",
				],
			},
			{
				title: "Электрические грили",
				items: [
					"Электрические грили Weber",
					"Электрические грили Napoleon",
					"Электрические грили Primo",
					"Электрические грили Oklahoma Joe's",
					"Электрические грили Char-Broil",
					"Электрические грили Big Green Egg",
					"Электрические грили Start Grill",
				],
			},
		],
	};

	return (
		<>
			<StyleButton onClick={handleToggle}>
				<span>Каталог</span>
				<img src="src/assets/icons/arrow_down.svg" alt="arrow" />
			</StyleButton>

			{open && (
				<DropdownWrapper>
					{/* Левый список */}
					<div className="list">
						{menuItems.map((item, index) => (
							<DropdownItem
								key={index}
								onClick={() => setActive(item)}
								active={active === item}
							>
								{item}
								<button>
									<img src="src/assets/icons/arrow_right.svg" alt="" />
								</button>
							</DropdownItem>
						))}
					</div>

					<div className="subMenu">
						{/* Правый блок — подменю */}
						{active && subMenuData[active] && (
							<SubMenuWrapper>
								{subMenuData[active].map((category, index) => (
									<div key={index}>
										<SubMenuTitle>{category.title}</SubMenuTitle>
										{category.items.map((sub, i) => (
											<SubMenuItem key={i}>{sub}</SubMenuItem>
										))}
									</div>
								))}
							</SubMenuWrapper>
						)}
					</div>
				</DropdownWrapper>
			)}
		</>
	);
}
