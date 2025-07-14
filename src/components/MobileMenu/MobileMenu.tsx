import { useState } from "react";
import { StyleMobileMenu } from "./MobileMenu.style";
import { Catalog } from "../Catalog/Catalog"; // путь подстрой под свой проект
import { Services } from "../Services/Services";
import { Blog } from "../Blog/Blog";
import { Info } from "../Info/Info";

export const MobileMenu = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const menuItems = [
		{ name: "Каталог", icon: "./MainPage/catalog.png" },
		{ name: "Услуги", icon: "./MainPage/services.png" },
		{ name: "Блог", icon: "./MainPage/blog.png" },
		{ name: "Инфо", icon: "./MainPage/info.png" },
	];

	return (
		<>
			<StyleMobileMenu>
				<div className="innerMobileMenu">
					{menuItems.map((item, index) => (
						<div
							key={index}
							className={`MenuItem ${activeIndex === index ? "active" : ""}`}
							onClick={() => setActiveIndex(index)}
						>
							<img src={item.icon} alt={item.name} />
							<div className="text">{item.name}</div>
						</div>
					))}
				</div>
				{/* Показать <Catalog /> только если выбран "Каталог" (index 0) */}
				{activeIndex === 0 && <Catalog />}
				{activeIndex === 1 && <Services />}
				{activeIndex === 2 && <Blog />}
				{activeIndex === 3 && <Info />}
			</StyleMobileMenu>
		</>
	);
};
