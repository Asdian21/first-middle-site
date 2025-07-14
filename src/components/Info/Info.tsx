import { StyleInfo } from "./Info.style";

export const Info = () => {
	const info = [
		"Гарантия",
		"Условия оплаты",
		"О компании",
		"Условия доставки",
		"Наши работы",
		"Рассрочка и кредит",
	];

	return (
		<StyleInfo>
			{info.map((el) => (
				<div key={el} className="info">
					<div className="innerInfo">{el}</div>
				</div>
			))}
		</StyleInfo>
	);
};
