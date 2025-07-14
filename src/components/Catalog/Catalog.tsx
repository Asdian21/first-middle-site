import { useState } from "react";
import { StyleCatalog, SubCategory } from "./Catalog.style";

export const Catalog = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

	const catalog = [
		{
			name: "Грили",
			sub: [
				"Газовые грили",
				"Угольные грили",
				"Керамические грили",
				"Электрические грили",
				"Дровяные грили",
				"Пеллетные грили",
			],
		},
		{ name: "Коптильни" },
		{ name: "Печи" },
		{ name: "Барбекю-зона" },
		{ name: "Аксессуары" },
		{ name: "Тандыры" },
		{ name: "Уличное оборудование" },
		{ name: "Услуги" },
		{ name: "Бренды" },
		{ name: "Акции" },
		{ name: "Сертификаты" },
	];

	const handleClick = (index: number) => {
		setActiveIndex((prev) => (prev === index ? null : index));
		setActiveSubIndex(null); // Сбросить активную подкатегорию при смене категории
	};

	const handleSubClick = (subIndex: number) => {
		setActiveSubIndex((prev) => (prev === subIndex ? null : subIndex));
	};

	return (
		<StyleCatalog>
			{catalog.map((item, index) => (
				<div key={index}>
					<button
						onClick={() => handleClick(index)}
						style={{
							backgroundColor:
								activeIndex === index ? "var(--red)" : "rgba(14, 14, 14, 0.83)",
						}}
					>
						<div className="text">{item.name}</div>
						<img
							src="src/assets/icons/arrow_down.svg"
							className={activeIndex === index ? "rotated" : ""}
							alt="arrow"
						/>
					</button>

					{activeIndex === index && item.sub && (
						<SubCategory>
							{item.sub.map((sub, subIndex) => (
								<div key={subIndex}>
									<button
										className="subitem"
										onClick={() => handleSubClick(subIndex)}
										style={{
											backgroundColor:
												activeSubIndex === subIndex
													? "var(--red)"
													: "transparent",
											color: activeSubIndex === subIndex ? "#fff" : "#ccc",
										}}
									>
										<div className="text">{sub}</div>
										<img
											src="src/assets/icons/arrow_down.svg"
											className={activeSubIndex === subIndex ? "rotated" : ""}
											alt="arrow"
										/>
									</button>

									{activeSubIndex === subIndex && (
										<div style={{ padding: "5px 20px", color: "#999" }}>
											{/* Вложенный контент (можно заменить на другой компонент) */}
											Доп. информация о "{sub}"
										</div>
									)}
								</div>
							))}
						</SubCategory>
					)}
				</div>
			))}
		</StyleCatalog>
	);
};
