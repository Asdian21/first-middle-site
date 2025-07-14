import { StyleServices } from "./Services.style";

export const Services = () => {
	const services = [
		"Аренда грилей",
		"Ремонт грилей",
		"Техническое обслуживание",
	];

	return (
		<StyleServices>
			{services.map((el) => (
				<div className="service">
					<div className="innerService">{el}</div>
				</div>
			))}
		</StyleServices>
	);
};
