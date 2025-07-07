import { useState } from "react";
import {
	Wrapper,
	InputWrapper,
	SearchInput,
	SearchIcon,
} from "./SearchBar.style";
import SearchSvg from "../../../public/MainPage/search.svg";

export const SearchBar = () => {
	const [search, setSearch] = useState("");

	return (
		<Wrapper>
			<InputWrapper>
				<SearchInput
					type="text"
					placeholder="Например, керамические грили"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<SearchIcon src={SearchSvg} alt="search" />
			</InputWrapper>
		</Wrapper>
	);
};
