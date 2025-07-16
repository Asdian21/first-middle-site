import { H2 } from "../../../components/h2/h2";
import { StyleSection_2 } from "./Section_2.style";

export const Section_2 = () => {
	return (
		<StyleSection_2>
			<H2 h2="Грили" />
			<div className="grills">
				<div className="gasKeramic">
					<a href="#" className="item gas">
						Газовые грили
					</a>
					<a href="#" className="item keramic">
						Керамические грили
					</a>
				</div>
				<a href="#" className="item coal">
					Угольные грили
				</a>
				<div className="electricPelet">
					<a href="#" className="item electric">
						Электрические грили
					</a>
					<a href="#" className="item pelet">
						Пеллетные грили
					</a>
				</div>
				<div className="woodCopt">
					<a href="#" className="item wood">
						Дровяные грили
					</a>
					<a href="#" className="item copt">
						Коптильни
					</a>
				</div>
			</div>
		</StyleSection_2>
	);
};
