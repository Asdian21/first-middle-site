import { StyleH2 } from "./h2.style";

interface Props {
	h2: string;
}

export const H2 = ({ h2 }: Props) => {
	return (
		<StyleH2>
			<div className="h2">
				<h2>{h2}</h2>
			</div>
		</StyleH2>
	);
};
