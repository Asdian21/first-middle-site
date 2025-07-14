import { useState } from "react";
import { BasicMenu } from "../../BasicMenu/BasicMenu";
import { Icons } from "../../Icons/Icons";
import { SearchBar } from "../../SearchBar/SearchBar";
import { Block, StyleHeader, StyleNumber } from "./Header.style";

export const Header = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [activeIndexBlock, setActiveIndexBlock] = useState<number | null>(null);

	const menuItems = [
		{ id: 0, label: "О нас" },
		{ id: 1, label: "Доставка" },
		{ id: 2, label: "Оплата" },
		{ id: 3, label: "Услуги" },
		{ id: 4, label: "Блог" },
		{ id: 5, label: "Контакты" },
	];

	return (
		<StyleHeader>
			<div className="first_line">
				<div className="left_info_container">
					<div className="location">
						<img
							src="src\assets\icons\locationMark.svg"
							className="locationImg"
						></img>
						<span className="location_text">
							г. Санкт-Петербург, ул. Заставская 11, к. 2
						</span>
					</div>
					<div className="work_time">
						<img src="src/assets/icons/clockMark.svg" className="clockImg" />
						<div className="work_time_text">11:00 - 19:00</div>
					</div>
					<div className="vertical_line"></div>
					<div className="orders">Онлайн заказы 24/7</div>
				</div>
				<div className="right_info_container">
					{menuItems.map((item) => (
						<a href="#" key={item.id}>
							<div
								className={`${item.label.toLowerCase()} ${
									activeIndex === item.id ? "active" : "disabled"
								}`}
								onClick={() => setActiveIndex(item.id)}
							>
								{item.label}
							</div>
						</a>
					))}
				</div>
			</div>
			<div className="second_line">
				<div className="logo"></div>
				<div className="search">
					<div className="catalog">
						<BasicMenu />
					</div>
					<SearchBar />
				</div>
				<div className="free_for_regions">
					<div className="left_side">
						<div className="left_top">
							<StyleNumber>
								<img src="src/assets/icons/phoneIcon.svg" alt="phoneIcon" />
								<span>+7 (800) 707 99 20</span>
							</StyleNumber>{" "}
							<button>
								<img
									src="src/assets/icons/arrow_down_2.svg"
									alt="arrow_down_2"
								/>
							</button>
						</div>
						<span className="left_bottom">Бесплатно для регионов</span>
					</div>
					<div className="right_side">
						<StyleNumber>
							<img src="src/assets/icons/phoneIcon.svg" alt="phoneIcon" />
							<span>+7 (800) 707 99 20</span>
						</StyleNumber>
						<StyleNumber>
							<img src="src/assets/icons/phoneIcon.svg" alt="phoneIcon" />
							<span>+7 (800) 707 99 20</span>
						</StyleNumber>
					</div>
				</div>
				<Icons />
			</div>
			<div className="third_line">
				{[
					"Газовые грили",
					"Угольные грили",
					"Керамические грили",
					"Коптильни",
					"Аксессуары",
					"Гриль-кухни",
					"Школа барбекю",
				].map((label, index) => (
					<Block
						key={index}
						className={`block${index + 1} block`}
						$active={activeIndexBlock === index}
						onClick={() => setActiveIndexBlock(index)}
					>
						{label}
					</Block>
				))}
			</div>
		</StyleHeader>
	);
};
