import { useState } from "react";
import { StyleSection_1 } from "./Section_1.style";

export const Section_1 = () => {
	const [activeIndex, setActiveIndex] = useState(Number);

	const menuItems = [
		{ id: 0, label: "О нас" },
		{ id: 1, label: "Доставка" },
		{ id: 2, label: "Оплата" },
		{ id: 3, label: "Услуги" },
		{ id: 4, label: "Блог" },
		{ id: 5, label: "Контакты" },
	];

	return (
		<StyleSection_1>
			<div className="first_line">
				<div className="left_info_container">
					<div className="location">
						<img
							src="./MainPage/locationMark.svg"
							className="locationImg"
						></img>
						<span className="location_text">
							г. Санкт-Петербург, ул. Заставская 11, к. 2
						</span>
					</div>
					<div className="work_time">
						<img src="./MainPage/clockMark.svg" className="clockImg" />
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
		</StyleSection_1>
	);
};
